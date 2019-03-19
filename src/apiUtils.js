import Alert from 'react-s-alert'
import config from './config'
import {
  SET_PASSWORD, SET_SESSION_ID, SET_SEARCH_RESULT, RESET_USER,
} from './store'
import demoResult from './demoResult'

const rejectError = (response) => {
  const error = new Error()
  const contentType = response.headers.get('content-type')

  error.response = response

  if (contentType && contentType.includes('application/json')) {
    error.name = 'ApiError'
    return response.json()
      .then((body) => {
        error.body = body;
        return Promise.reject(error)
      })
  }

  return Promise.reject(error)
}

export const fakeFetch = endpoint => new Promise((resolve) => {
  const delayedResolve = (data) => {
    setTimeout(() => resolve(data), config.fakeFetchDelay)
  }

  if (endpoint.startsWith('/invoices/queryinvoice')) {
    delayedResolve(demoResult)
  } else if (endpoint.startsWith('/sessions/createsession')) {
    delayedResolve({ sessionId: 'demo' })
  } else if (endpoint.startsWith('/sessions/currentuser')) {
    delayedResolve({ user: { login: '123456789011' } })
  } else if (endpoint.startsWith('/sessions/closesession')) {
    delayedResolve({ status: 'CLOSED' })
  }
})

export const isDemo = opts => (
  opts && (
    (opts.headers && opts.headers['Session-ID'] === 'demo')
    || (opts.body && JSON.parse(opts.body).username === '123456789011')
  )
)

export const apiCall = (
  endpoint,
  { headers: headersArg, ...otherOpts } = {},
) => {
  const url = config.apiHost + endpoint
  const options = {
    headers: {
      'Content-Type': 'application/json',
      ...headersArg,
    },
    mode: 'cors',
    ...otherOpts,
  }

  if (isDemo(options)) {
    return fakeFetch(endpoint, options)
  }

  return fetch(url, options)
    .then(response => (response.ok ? response.json() : rejectError(response)))
}

export const resetStore = (dispatch) => {
  dispatch({ type: RESET_USER })
  dispatch({ type: SET_PASSWORD, password: '' })
  dispatch({ type: SET_SESSION_ID, sessionId: '' })
  dispatch({ type: SET_SEARCH_RESULT, searchResult: {} })
}

export const logOut = ({ user, password, sessionId }, dispatch) => {
  const options = {
    method: 'POST',
    headers: {
      'Session-ID': sessionId,
    },
    body: JSON.stringify({
      username: user && user.login,
      password,
      sessionId,
    }),
  }

  return apiCall('/sessions/closesession', options)
    .then(() => resetStore(dispatch))
    .catch(onLogoutFail)
}

const handleApiError = (error) => {
  if (!error.body.soapError) {
    return Alert.info('Unknown API Error')
  }

  return Alert.info(error.body.soapError.faultstring)
}

const handleUnknownError = (error) => {
  if (error.response) {
    return Alert.info(`${error.response.status} ${error.response.statusText}`)
  }

  return Alert.info(`${error.name}: ${error.message}`)
}

export const onLogoutFail = (error) => {
  if (error.name === 'ApiError') {
    return handleApiError(error)
  }

  return handleUnknownError(error)
}

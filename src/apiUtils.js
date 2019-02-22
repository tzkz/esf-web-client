import config from './config'
import { SET_USER, SET_PASSWORD, SET_SESSION_ID, SET_SEARCH_RESULT } from './store';
import demoResult from './demoResult';

const rejectError = (response) => {
  const error = new Error()
  const contentType = response.headers.get('content-type')

  error.response = response

  if (contentType && contentType.includes('application/json')) {
    error.name = "ApiError"
    return response.json()
      .then((body) => {
        error.body = body;
        return Promise.reject(error)
      })
  }

  return Promise.reject(error)
}

export const fakeFetch = (endpoint) => new Promise ((resolve) => {
  if (endpoint.startsWith('/invoices/queryinvoice')) {
    setTimeout(() => resolve(demoResult), 1000)
  }
  if (endpoint.startsWith('/sessions/createsession')) {
    setTimeout(() => resolve({ sessionId: 'demo' }), 1000)
  }
  if (endpoint.startsWith('/sessions/currentuser')) {
    setTimeout(() => resolve({ user: { login: '123456789011' } }), 1000)
  }
})

export const isDemo = (opts) => (
  opts && (
    (opts.headers && opts.headers['Session-ID'] === 'demo') ||
    (opts.body && JSON.parse(opts.body).username === '123456789011')
  )
)

export const apiCall = (endpoint, optionsArg) => {
  const url = config.apiHost + endpoint
  const options = {
    headers: {
      'Content-Type': 'application/json',
    },
    mode: 'cors',
    ...optionsArg,
  }

  if (isDemo(optionsArg)) {
    return fakeFetch(endpoint, options)
  }

  return fetch(url, options)
    .then((response) => response.ok ? response.json() : rejectError(response))
}

export const resetStore = (dispatch) => {
  dispatch({ type: SET_USER, user: null })
  dispatch({ type: SET_PASSWORD, password: null })
  dispatch({ type: SET_SESSION_ID, sessionId: null })
  dispatch({ type: SET_SEARCH_RESULT, searchResult: null })
}

export const logOut = ({ user, password, sessionId }, dispatch) => {
  const options = {
    method: 'POST',
    body: JSON.stringify({
      username: user && user.login,
      password: password,
      sessionId: sessionId,
    }),
  }

  if (sessionId === 'demo') {
    return resetStore(dispatch)
  }

  return apiCall('/sessions/closesession', options)
    .then(() => resetStore(dispatch))
}

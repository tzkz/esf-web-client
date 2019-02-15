import config from './config'
import { SET_USER, SET_PASSWORD, SET_SESSION_ID, SET_SEARCH_RESULT } from './store';

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

export const apiCall = (endpoint, optionsArg) => {
  const url = config.apiHost + endpoint
  const options = {
    headers: {
      'Content-Type': 'application/json',
    },
    mode: 'cors',
    ...optionsArg,
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
      username: user.login,
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
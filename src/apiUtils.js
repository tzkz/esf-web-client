import config from './config'
import { SET_USER, SET_PASSWORD, SET_SESSION_ID } from './store';

const rejectError = (response) => {
  const error = new Error()

  error.name = "ApiError"
  error.response = response

  return Promise.reject(error)
}

export const apiCall = (endpoint, optionsArg) => {
  const url = config.apiHost + endpoint
  const options = {
    headers: {
      'Content-Type': 'application/json',
    },
    ...optionsArg,
  }

  return fetch(url, options)
    .then((response) => response.ok ? response.json() : rejectError(response))
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

  return apiCall('/sessions/closesession', options)
    .then(() => {
      dispatch({ type: SET_USER, user: null })
      dispatch({ type: SET_PASSWORD, password: null })
      dispatch({ type: SET_SESSION_ID, sessionId: null })
    })
}
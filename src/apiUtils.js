import config from './config'

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

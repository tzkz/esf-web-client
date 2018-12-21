import config from './config'

export const apiCall = (endpoint, optionsArg) => {
  const url = config.apiHost + endpoint
  const options = {
    headers: {
      'Content-Type': 'application/json',
    },
    ...optionsArg,
  }

  return fetch(url, options)
    .then((response) => response.json())
}

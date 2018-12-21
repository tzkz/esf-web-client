import config from './config'

export const apiCall = (endpoint) => {
  const url = config.apiHost + endpoint

  return fetch(url)
    .then((response) => response.json())
}

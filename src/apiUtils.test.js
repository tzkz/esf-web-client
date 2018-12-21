import { apiCall } from './apiUtils'
import config from './config';

describe('apiUtils.js', () => {
  describe('apiCall()', () => {
    const response = { json: jest.fn().mockResolvedValue() }
    global.fetch = jest.fn().mockResolvedValue(response)

    it('calls fetch with correct url', () => {
      config.apiHost = 'https://example.com'

      return apiCall('/foo')
        .then(() => {
          expect(fetch).toBeCalledWith('https://example.com/foo')
        })
    })

    it('calls response.json() when fetch is resolved', () => {
      return apiCall('/foo')
        .then(() => {
          expect(response.json).toBeCalled()
        })
    })
  })
})

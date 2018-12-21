import { apiCall } from './apiUtils'
import config from './config';

describe('apiUtils.js', () => {
  describe('apiCall()', () => {
    const response = { json: jest.fn().mockResolvedValue(), ok: true }
    global.fetch = jest.fn().mockResolvedValue(response)
    config.apiHost = 'https://example.com'

    it('calls fetch with correct url and options', () => {
      const expectedOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }
      }

      return apiCall('/foo', { method: 'POST' })
        .then(() => {
          expect(fetch).toBeCalledWith('https://example.com/foo', expectedOptions)
        })
    })

    it('overrides default headers', () => {
      const expectedOptions = {
        headers: {
          'Content-Type': 'application/pdf',
        }
      }

      return apiCall('/foo', { headers: { 'Content-Type': 'application/pdf' } })
        .then(() => {
          expect(fetch).toBeCalledWith('https://example.com/foo', expectedOptions)
        })
    })

    it('calls response.json() when fetch is resolved', () => {
      return apiCall('/foo')
        .then(() => {
          expect(response.json).toBeCalled()
        })
    })

    it('rejects if response is not ok', () => {
      response.ok = false;

      return apiCall('/foo')
        .then(() => Promise.reject('shouldnotresolve'))
        .catch((error) => {
          expect(error).not.toEqual('shouldnotresolve')
          expect(error.response).toEqual(response)
        })
    })
  })
})

import * as utils from './apiUtils'
import config from './config';

describe('apiUtils.js', () => {
  describe('apiCall()', () => {
    const response = {
      json: jest.fn().mockResolvedValue(),
      ok: true,
      headers: {
        get: jest.fn()
      }
    }
    global.fetch = jest.fn().mockResolvedValue(response)
    config.apiHost = 'https://example.com'

    it('calls fetch with correct url and options', () => {
      const expectedOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
      }

      return utils.apiCall('/foo', { method: 'POST' })
        .then(() => {
          expect(fetch).toBeCalledWith('https://example.com/foo', expectedOptions)
        })
    })

    it('overrides default headers', () => {
      const expectedOptions = {
        headers: {
          'Content-Type': 'application/pdf',
        },
        mode: 'cors',
      }

      return utils.apiCall('/foo', { headers: { 'Content-Type': 'application/pdf' } })
        .then(() => {
          expect(fetch).toBeCalledWith('https://example.com/foo', expectedOptions)
        })
    })

    it('calls response.json() when fetch is resolved', () => {
      return utils.apiCall('/foo')
        .then(() => {
          expect(response.json).toBeCalled()
        })
    })

    it('rejects if response is not ok', () => {
      response.ok = false;

      return utils.apiCall('/foo')
        .then(() => Promise.reject('shouldnotresolve'))
        .catch((error) => {
          expect(error).not.toEqual('shouldnotresolve')
          expect(error.response).toEqual(response)
        })
    })
  })
  
  describe('isDemo()', () => {
    it('returns true if session id is "demo"', () => {
      const options = {
        headers: {
          'Session-ID': 'demo',
        }
      }

      expect(utils.isDemo(options)).toEqual(true)
    })
  })
})

import * as utils from './apiUtils'
import demoResult from './demoResult';

jest.mock('./config')

describe('apiUtils.js', () => {
  describe('apiCall()', () => {
    const response = {
      json: jest.fn().mockResolvedValue(),
      ok: true,
      headers: {
        get: jest.fn(),
      },
    }
    global.fetch = jest.fn().mockResolvedValue(response)

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

    it('calls response.json() when fetch is resolved', () => utils.apiCall('/foo')
      .then(() => {
        expect(response.json).toBeCalled()
      }))

    it('rejects if response is not ok', () => {
      response.ok = false;

      return utils.apiCall('/foo')
        .then(() => Promise.reject(new Error('shouldnotresolve')))
        .catch((error) => {
          expect(error.message).not.toEqual('shouldnotresolve')
          expect(error.response).toEqual(response)
        })
    })
  })

  describe('isDemo()', () => {
    it('returns true if session id is "demo"', () => {
      const options = {
        headers: {
          'Session-ID': 'demo',
        },
      }

      expect(utils.isDemo(options)).toEqual(true)
    })

    it('returns true if username is test user', () => {
      const options = {
        body: JSON.stringify({
          username: '123456789011',
        }),
      }
      expect(utils.isDemo(options)).toEqual(true)
    })
  })

  describe('fakeFetch()', () => {
    it('resolves to demo result if endpoint is /invoices/queryinvoice', () => utils.fakeFetch('/invoices/queryinvoice?direction=INBOUND')
      .then((result) => {
        expect(result).toEqual(demoResult)
      }))

    it('resolves to demo sessionId', () => utils.fakeFetch('/sessions/createsession')
      .then((result) => {
        expect(result.sessionId).toEqual('demo')
      }))

    it('resolves to demo user', () => utils.fakeFetch('/sessions/currentuser')
      .then((result) => {
        expect(result.user.login).toEqual('123456789011')
      }))

    it('resolves with timeout on closesession', () => utils.fakeFetch('/sessions/closesession')
      .then((result) => {
        expect(result.status).toEqual('CLOSED')
      }))
  })
})

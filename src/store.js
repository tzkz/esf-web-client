import { combineReducers, createStore } from 'redux'
import { throttle } from 'lodash'

export const SET_SESSION_ID = 'SET_SESSION_ID'
export const SET_USER = 'SET_USER'
export const SET_PASSWORD = 'SET_PASSWORD'
export const SET_SEARCH_RESULT = 'SET_SEARCH_RESULT'

const sampleSearchResult = {
  lastBlock: true,
  currPage: 0,
  rsCount: 4,
  invoiceInfoList: {
    invoiceInfo: [
      {
        invoiceId: '20113995733614592',
        inputDate: '2018-12-18T11:44:23.928Z',
        lastUpdateDate: '2018-12-18T11:44:23.978Z',
        signatureValid: true,
        invoiceStatus: 'FAILED',
        cancelReason: 'NDS_RATE_FOR_NOT_NDS_PAYER',
        version: 'InvoiceV2',
        signature: 'Xfl9GXdtun++G1L7RWhkZwmBBnHtVoN/TYaDNCLnqLlwDeMu+2ik9srK+6zh4VQ0\ncZiSCX8oh+mesu/iYjlgYw==',
        signatureType: 'COMPANY',
        kogd: '0001'
      },
      {
        invoiceId: '20113998693638144',
        inputDate: '2018-12-18T11:50:25.242Z',
        lastUpdateDate: '2018-12-18T11:50:25.326Z',
        signatureValid: true,
        invoiceStatus: 'FAILED',
        cancelReason: 'NDS_RATE_FOR_NOT_NDS_PAYER',
        version: 'InvoiceV2',
        signature: 'NxxuHnQdnrvyZvD+ssy+1J/pL+FwNwbupNnRaTYoZ3UwSPqnyJZo/DdQAhCzLN2Q\n6ruLvYQ3jYmi5/nrqxUrzQ==',
        signatureType: 'COMPANY',
        kogd: '0001'
      },
      {
        invoiceId: '20114103046471680',
        registrationNumber: 'ESF-123456789011-20181218-76963660',
        inputDate: '2018-12-18T15:22:43.639Z',
        deliveryDate: '2018-12-18T19:46:45.104Z',
        lastUpdateDate: '2018-12-18T19:46:45.104Z',
        signatureValid: true,
        invoiceStatus: 'DELIVERED',
        cancelReason: '',
        version: 'InvoiceV2',
        signature: 'vc7MVUyi21s6GustazpWhz+YcgOGN4bQU5Hf8+7lS1JT4lf4z1kxACFc8cGh+pJ4lQdJ5wGIfnZmto6iW7ZsQQ==',
        signatureType: 'COMPANY',
        kogd: '0001'
      },
      {
        invoiceId: '20114142229151744',
        registrationNumber: 'ESF-123456789011-20181218-81746701',
        inputDate: '2018-12-18T16:42:26.682Z',
        deliveryDate: '2018-12-18T16:55:51.989Z',
        lastUpdateDate: '2018-12-18T16:55:51.989Z',
        signatureValid: true,
        invoiceStatus: 'DELIVERED',
        cancelReason: '',
        version: 'InvoiceV2',
        signature: 'UeCNz0pbuVO87ph5Vnc3L2C5/U/3hTh6Lvs3dI7yKRuWfbdHOniIEWWFeJ7JyyP50Ff338ogp9O5BNo4svrMvg==',
        signatureType: 'COMPANY',
        kogd: '0001'
      }
    ]
  }
}

const sessionId = (state = null, action) => {
  switch (action.type) {
    case SET_SESSION_ID:
      return action.sessionId;
    default:
      return state;
  }
}

const user = (state = null, action) => {
  switch (action.type) {
    case SET_USER:
      return action.user;
    default:
      return state;
  }
}

const password = (state = null, action) => {
  switch (action.type) {
    case SET_PASSWORD:
      return action.password;
    default:
      return state;
  }
}

const searchResult = (state = sampleSearchResult, action) => {
  switch (action.type) {
    case SET_SEARCH_RESULT:
      return action.searchResult;
    default:
      return state;
  }
}

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch (err) {
    // ignore
  }
}

const store = createStore(
  combineReducers({
    sessionId,
    user,
    password,
    searchResult,
  }),
  loadState(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(throttle(() => {
  saveState(store.getState())
}))

export default store

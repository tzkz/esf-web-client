import { combineReducers, createStore } from 'redux'
import { throttle } from 'lodash'
import 'moment/locale/ru'
import 'moment/locale/kk'
import moment from 'moment'

export const SET_LOCALE = 'SET_LOCALE'
export const SET_SESSION_ID = 'SET_SESSION_ID'
export const SET_USER = 'SET_USER'
export const RESET_USER = 'RESET_USER'
export const SET_PASSWORD = 'SET_PASSWORD'
export const SET_SEARCH_RESULT = 'SET_SEARCH_RESULT'

// reducers

const locale = (state = 'en-US', action) => {
  switch (action.type) {
    case SET_LOCALE:
      return action.locale
    default:
      return state
  }
}

const sessionId = (state = '', action) => {
  switch (action.type) {
    case SET_SESSION_ID:
      return action.sessionId
    default:
      return state
  }
}

const userInitialState = {
  login: '',
  taxpayer: {
    firstNameRu: '',
    lastNameRu: '',
  },
}

const user = (state = userInitialState, action) => {
  switch (action.type) {
    case SET_USER:
      return action.user
    case RESET_USER:
      return userInitialState
    default:
      return state
  }
}

const password = (state = '', action) => {
  switch (action.type) {
    case SET_PASSWORD:
      return action.password
    default:
      return state
  }
}

const searchResult = (state = {}, action) => {
  switch (action.type) {
    case SET_SEARCH_RESULT:
      return action.searchResult
    default:
      return state
  }
}

// local storage

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
    locale,
    sessionId,
    user,
    password,
    searchResult,
  }),
  loadState(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

moment.locale(store.getState().locale)

store.subscribe(throttle(() => {
  saveState(store.getState())
}))

export const onLocaleChange = (value, dispatch) => {
  moment.locale(value)
  dispatch({ type: SET_LOCALE, locale: value })
}

export default store

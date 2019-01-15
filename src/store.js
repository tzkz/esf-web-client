import { combineReducers, createStore } from 'redux'
import { throttle } from 'lodash'

export const SET_SESSION_ID = 'SET_SESSION_ID'
export const SET_USER = 'SET_USER'
export const SET_PASSWORD = 'SET_PASSWORD'
export const SET_SEARCH_RESULT = 'SET_SEARCH_RESULT'

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

const searchResult = (state = null, action) => {
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

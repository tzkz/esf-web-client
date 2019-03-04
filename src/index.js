import React from 'react'
import ReactDOM from 'react-dom'
import promiseFinally from 'promise.prototype.finally'

import App from './App'

import * as serviceWorker from './serviceWorker'

import 'react-s-alert/dist/s-alert-default.css'
import 'react-s-alert/dist/s-alert-css-effects/stackslide.css'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'
import './react_dates_overrides.css'
import './index.css'


promiseFinally.shim() // Promise.prototype.finally() polyfill

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register()

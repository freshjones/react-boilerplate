import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import App from './components/app/app'
import { APP_CONTAINER_ID } from '../shared/config'

const rootEl = document.getElementById(APP_CONTAINER_ID)

const wrapApp = AppComponent =>
  <AppContainer>
    <AppComponent />
  </AppContainer>

ReactDOM.render(wrapApp(App), rootEl)

if (module.hot) {
  module.hot.accept('./components/app/app', () => {
    // eslint-disable-next-line global-require
    const NextApp = require('./components/app/app').default
    ReactDOM.render(wrapApp(NextApp), rootEl)
  })
}

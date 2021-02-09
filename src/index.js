import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import store from './redux/reduxStore'
import reportWebVitals from './reportWebVitals'
import {Provider} from 'react-redux'

import './index.css'

  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Provider>
    </BrowserRouter>, document.getElementById('root')
  )

reportWebVitals()

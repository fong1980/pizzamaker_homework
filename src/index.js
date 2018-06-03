import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers/index'
import { Wrapper } from './styles/index'

const devTools = window.devToolsExtension ? window.devToolsExtension() : f => f

ReactDOM.render(
  <Provider store={createStore(rootReducer, devTools)}>
    <Wrapper>
      <App />
    </Wrapper>
  </Provider>,
  document.getElementById('root')
)

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers/index'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  width: 95vw;
  min-height: 100vh;
  justify-content: center;
  align-self: auto;
`

const devTools = window.devToolsExtension ? window.devToolsExtension() : f => f

ReactDOM.render(
  <Provider store={createStore(rootReducer, devTools)}>
    <Wrapper>
      <App />
    </Wrapper>
  </Provider>,
  document.getElementById('root')
)

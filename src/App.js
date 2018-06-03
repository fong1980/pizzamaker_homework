import React, { Component } from 'react'
import TotalBox from './components/Total'
import BasesBox from './components/Bases'
import SaucesBox from './components/Sauces'
import ToppingsBox from './components/Toppings'
import styled from 'styled-components'

const AppWrapper = styled.div`
  font-family: 'Assistant', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  > div {
    display: flex;
    max-width: 960px;
    justify-content: space-between;
  }
`

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <h1>Pizza Configurator</h1>
        <div>
          <div>
            <BasesBox />
            <SaucesBox />
            <ToppingsBox />
          </div>
          <div>
            <TotalBox />
          </div>
        </div>
      </AppWrapper>
    )
  }
}

export default App

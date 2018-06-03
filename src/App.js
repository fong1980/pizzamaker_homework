import React, { Component } from 'react'
import TotalBox from './components/Total'
import BasesBox from './components/Bases'
import SaucesBox from './components/Sauces'
import ToppingsBox from './components/Toppings'
import DroneBox from './components/Drone'
import { AppWrapper, OptionsWrapper, TotalWrapper } from './styles'

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <h1>Pizza Configurator</h1>
        <div>
          <OptionsWrapper>
            <BasesBox />
            <SaucesBox />
            <ToppingsBox />
            <DroneBox />
          </OptionsWrapper>
          <TotalWrapper>
            <TotalBox />
          </TotalWrapper>
        </div>
      </AppWrapper>
    )
  }
}

export default App

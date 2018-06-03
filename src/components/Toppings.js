import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { toppings } from '../constants'
import { changeToppings } from '../actions'
import styled from 'styled-components'

const Input = styled.div`
  display: flex;
  margin: 0.5rem;
  justify-content: space-between;
  align-items: baseline;
  div {
    display: flex;
    justify-content: center;
    align-items: baseline;
    > input {
      margin-right: 1rem;
    }
  }
`

const Warning = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.5rem;
  background-color: red;
  color: white;
`

class ToppingsBox extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      toppings: [],
      warning: null
    }
  }

  handleChange(event) {
    const { toppings } = this.state
    if (toppings.includes(event.target.value)) {
      const newToppings = toppings.filter(
        topping => topping !== event.target.value
      )
      this.setState({ toppings: newToppings, warning: null })
      this.props.changeToppings(newToppings)
    } else {
      if (toppings.length < 3) {
        const newToppings = [...toppings, event.target.value]
        this.setState({ toppings: newToppings, warning: null })
        this.props.changeToppings(newToppings)
      } else {
        this.setState({ warning: '3 toppings max!' })
      }
    }
  }

  render() {
    return (
      <div>
        <h3>Select some toppings for 0.50 each (max. 3)</h3>
        <form>
          {toppings.map(topping => {
            return (
              <Input key={topping}>
                <div>
                  <input
                    type="checkbox"
                    value={topping}
                    checked={this.state.toppings.includes(topping)}
                    onChange={this.handleChange.bind(this)}
                  />
                  <div>{topping}</div>
                </div>
              </Input>
            )
          })}
        </form>
        {this.state.warning && (
          <Warning>
            <strong>{this.state.warning}</strong>
          </Warning>
        )}
      </div>
    )
  }
}

export default connect(null, { changeToppings })(ToppingsBox)

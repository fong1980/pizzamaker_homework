import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { toppings } from '../constants'
import { changeToppings } from '../actions'
import { Input, Warning } from '../styles'

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
        <h3>3. Choose toppings (0.50 each, max. 3):</h3>
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

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { sauces } from '../constants'
import { changeSauce } from '../actions'
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

class SaucesBox extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      sauce: {
        name: 'White sauce',
        price: 0.0
      }
    }
  }

  handleChange(event) {
    const newSauce = sauces.find(sauce => sauce.name === event.target.value)
    this.setState({
      sauce: newSauce
    })
    this.props.changeSauce(newSauce)
  }

  render() {
    return (
      <div>
        <h3>Select a sauce:</h3>
        <form>
          {sauces.map(sauce => {
            return (
              <Input key={sauce.name}>
                <div>
                  <input
                    type="radio"
                    value={sauce.name}
                    checked={this.state.sauce.name === sauce.name}
                    onChange={this.handleChange.bind(this)}
                  />
                  <div>{sauce.name}</div>
                </div>
                <div>
                  <em>+{sauce.price.toFixed(2)}</em>
                </div>
              </Input>
            )
          })}
        </form>
      </div>
    )
  }
}

export default connect(null, { changeSauce })(SaucesBox)

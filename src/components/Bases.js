import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bases } from '../constants'
import { changeBase } from '../actions'
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

class BasesBox extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      base: {
        name: '25cm NY Style',
        price: 8.99
      }
    }
  }

  handleChange(event) {
    const newBase = bases.find(base => base.name === event.target.value)
    this.setState({
      base: newBase
    })
    this.props.changeBase(newBase)
  }

  render() {
    return (
      <div>
        <h3>Select a base:</h3>
        <form>
          {bases.map(base => {
            return (
              <Input key={base.name}>
                <div>
                  <input
                    type="radio"
                    value={base.name}
                    checked={this.state.base.name === base.name}
                    onChange={this.handleChange.bind(this)}
                  />
                  <div>{base.name}</div>
                </div>
                <div>
                  <em>{base.price.toFixed(2)}</em>
                </div>
              </Input>
            )
          })}
        </form>
      </div>
    )
  }
}

export default connect(null, { changeBase })(BasesBox)

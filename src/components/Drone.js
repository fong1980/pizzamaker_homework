import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { changeDrone } from '../actions'
import { Input } from '../styles'

class DroneBox extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      drone: false
    }
  }

  handleChange(event) {
    const { drone } = this.state
    this.setState({ drone: !drone })
    this.props.changeDrone(!drone)
  }

  render() {
    return (
      <div>
        <h3>Optional Extras:</h3>
        <form>
          <Input>
            <div>
              <input
                type="checkbox"
                value={this.state.drone}
                checked={this.state.drone}
                onChange={this.handleChange.bind(this)}
              />
              <div>Drone delivery</div>
            </div>
            <div>
              <em>+10%</em>
            </div>
          </Input>
        </form>
      </div>
    )
  }
}

export default connect(null, { changeDrone })(DroneBox)

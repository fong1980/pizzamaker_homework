import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import pizza from '../media/pizza.jpg'
import { TotalCard } from '../styles'

class TotalBox extends PureComponent {
  render() {
    const { base, sauce, toppings, drone } = this.props.myPizza

    const total = base.price + sauce.price + toppings.length * 0.5

    return (
      <TotalCard>
        <div className="image-card">
          <img src={pizza} alt="" />
          <div className="price">
            {drone && <h3>{(total * 1.1).toFixed(2)}</h3>}
            {!drone && <h3>{total.toFixed(2)}</h3>}
          </div>
        </div>
        <div className="details">
          <h4>Your Pizza:</h4>
          <ol>
            <li>{base.name}</li>
            <li>{sauce.name}</li>
            {toppings.map(topping => {
              return <li key={topping}>{topping}</li>
            })}
          </ol>
        </div>
      </TotalCard>
    )
  }
}

const mapStateToProps = ({ myPizza }) => {
  return { myPizza }
}

export default connect(mapStateToProps)(TotalBox)

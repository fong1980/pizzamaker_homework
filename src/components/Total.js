import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import pizza from '../media/pizza.jpg'

const TotalCard = styled.div`
  border: 1px solid black;
  border-radius: 2px;
  box-shadow: 1px 1px grey;
  padding: 0.5rem;
  display: flex;
  margin-left: 2rem;
  margin-top: 1rem;
  width: 350px;
  > div.image-card {
    display: flex;
    position: relative;
    height: 150px;
    width: 125px;
    padding: 1rem;
    > img {
      position: absolute;
      height: 140px;
    }
    > div.price {
      width: 1.5rem;
      height: 1.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      right: 0;
      bottom: 0;
      background-color: gold;
      padding: 1rem;
      border: 1px solid black;
      border-radius: 100%;
      box-shadow: 1px 1px grey;
    }
  }
  > div.details {
    > h4 {
      padding: 0;
      /* border: 1px dashed green; */
      margin: 0.5rem;
    }
    > ol {
      /* padding: 0; */
      margin: 0;
      /* border: 1px dashed green; */
    }
  }
`

class TotalBox extends PureComponent {
  render() {
    const { base, sauce, toppings } = this.props.myPizza
    return (
      <TotalCard>
        <div className="image-card">
          <img src={pizza} alt="" />
          <div className="price">
            <h3>{base.price + sauce.price + toppings.length * 0.5}</h3>
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

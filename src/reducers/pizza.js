import { ADD_BASE, ADD_SAUCE, ADD_TOPPINGS, ADD_DRONE } from '../actions'

export default function(state, { type, payload }) {
  switch (type) {
    case ADD_BASE:
      return { ...state, base: payload }
    case ADD_SAUCE:
      return { ...state, sauce: payload }
    case ADD_TOPPINGS:
      return { ...state, toppings: payload }
    case ADD_DRONE:
      return { ...state, drone: payload }
    default:
      return {
        base: {
          name: '25cm NY Style',
          price: 8.99
        },
        sauce: {
          name: 'White sauce',
          price: 0.0
        },
        toppings: [],
        drone: false
      }
  }
}

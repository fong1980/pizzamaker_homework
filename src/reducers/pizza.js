import { ADD_BASE, ADD_SAUCE, ADD_TOPPINGS } from '../actions'

export default function(state, { type, payload }) {
  switch (type) {
    case ADD_BASE:
      return { ...state, base: payload }
    case ADD_SAUCE:
      return { ...state, sauce: payload }
    case ADD_TOPPINGS:
      return { ...state, toppings: payload }
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
        toppings: []
      }
  }
}

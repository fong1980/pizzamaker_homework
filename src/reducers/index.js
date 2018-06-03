import { combineReducers } from 'redux'
import myPizza from './pizza'

const rootReducer = combineReducers({
  myPizza: myPizza
})

export default rootReducer

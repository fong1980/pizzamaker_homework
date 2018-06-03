export const ADD_BASE = 'ADD_BASE'
export const ADD_SAUCE = 'ADD_SAUCE'
export const ADD_TOPPINGS = 'ADD_TOPPINGS'
export const ADD_DRONE = 'ADD_DRONE'

export const changeBase = base => {
  return {
    type: ADD_BASE,
    payload: base
  }
}

export const changeSauce = sauce => {
  return {
    type: ADD_SAUCE,
    payload: sauce
  }
}

export const changeToppings = toppings => {
  return {
    type: ADD_TOPPINGS,
    payload: toppings
  }
}

export const changeDrone = drone => {
  return {
    type: ADD_DRONE,
    payload: drone
  }
}

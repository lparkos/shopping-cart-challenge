import {
  ADD_TO_CART,
  CHECKOUT_REQUEST,
  CHECKOUT_FAILURE,
  CLOSE_MODAL,
  GET_QUANTITY
} from '../constants/ActionTypes'

const initialState = {
  addedIds: [],
  quantityById: {}
}

// This isn't being used, but it was one attempt at creating an action that would toggle the state of the modal.
const closeModal = (state = initialState.closeModal, action) => {
  switch (action.type) {
    case CLOSE_MODAL:
      return !state.closeModal;
    default:
      return state
  }
}

const addedIds = (state = initialState.addedIds, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.indexOf(action.productId) !== -1) {
        return state
      }
      return [ ...state, action.productId ]
    default:
      return state
  }
}

const quantityById = (state = initialState.quantityById, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { productId } = action
      return { ...state,
        [productId]: (state[productId] || 0) + 1
      }
    default:
      return state
  }
}

// I'm not sure why this doesnt have an action type? Maybe its part of thunk? I'm not sure. My initial reaction was that maybe that was something I needed to modify? So I created another reducer with an action type.
export const • = (state, productId) =>
  state.quantityById[productId] || 0

// export const getQuantity = (state, productId) => {
//   switch (action.type) {
//     case GET_QUANTITY:
//       return state.quantityById[productId] || 0
//
//     default:
//       return state;
//   }
// }

export const getAddedIds = state => state.addedIds

const cart = (state = initialState, action) => {
  switch (action.type) {
    case CHECKOUT_REQUEST:
      return initialState
    case CHECKOUT_FAILURE:
      return action.cart
    // Maybe I should just use the cart reducer to emit an action type?
    case GET_QUANTITY:
      return action.cart
    default:
      return {
        addedIds: addedIds(state.addedIds, action),
        quantityById: quantityById(state.quantityById, action)
      }
  }
}

export default cart

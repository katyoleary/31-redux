'use strict';

let initialState = [];

export default (state=initialState, action) => {
  let {type, payload} = action;
  console.log(action.payload);

  switch(type) {
    case 'CATEGORY_CREATE':
      return [...state, payload]

    case 'CATEGORY_UPDATE':
      return state.map( category =>
      category.id === payload.id ? payload : category)

    case 'CATEGORY_DESTROY':
      return state.filter( category => category.id !== payload)

    case 'CATEGORY_RESET':
      return initialState

    default:
      return state
  }
}
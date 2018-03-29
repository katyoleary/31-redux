'use strict';

let initialState = []; //this line only hit once, then manipulated wiht the action paramete, then exported

export default (state=initialState, action) => {
  let {type, payload} = action; //this is shorthand for action.type and action.payload

  switch(type) {
    case 'EXPENSE_CREATE':
      return [...state, payload]

    case 'EXPENSE_UPDATE': {
      const {categoryID} = payload;

      console.log(state, categoryID)
      return state.map( expense => expense.id === payload.id ? payload : expense)
    }
      // return state.map( expenseCreate => 
      // expenseCreate.id === payload.id ? payload : expenseCreate)

    case 'EXPENSE_DESTROY':
      return state.filter( expense => expense.id !== payload.id)

    case 'CATEGORY_DESTROY':
      return state.filter( expense => expense.categoryID !== payload.id)

    default:
      return state
  }
}

 
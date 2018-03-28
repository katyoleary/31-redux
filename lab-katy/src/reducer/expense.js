'use strict';

let initialState = []; //this line only hit once, then manipulated wiht the action paramete, then exported

export default (state=initialState, action) => {
  let {type, payload} = action; //this is shorthand for action.type and action.payload

  switch(type) {

    case 'CATEGORY_CREATE':
      return {...state, [payload.id] : []}

    case 'CATEGORY_DESTROY':
      return {...state, [payload.id] : [undefined]}

    case 'EXPENSE_CREATE':
      var {categoryID} = payload.categoryID;
      var categoryExpenses = state[categoryID];
      return {...state, [categoryID]: [...categoryExpenses, payload]};

    case 'EXPENSE_UPDATE':
      var categoryID = payload.categoryID;
      var categoryExpenses = state[categoryID];

      return {
        ...state, 
        [categoryID]: categoryExpenses.map( expense => expense.id === payload.id ? payload : expense)
      }

      // return state.map( expenseCreate => 
      // expenseCreate.id === payload ? payload : expenseCreate)

    case 'EXPENSE_DESTROY':
      var categoryID = payload.categoryID;
      var categoryExpenses = state[categoryID];

      return {
        ...state, 
        [categoryID]: categoryExpenses.filter( expense => expense.id !== payload.id)
      }
      // return state.filter( expense => expense.id !== payload.id)

    default:
      return state
  }
}


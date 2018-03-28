'use strict';

const validateExpense = store => next => action => {
  const isExpense = action.type && action.type.startsWith('EXPENSE');

  if(isExpense) {
    try {
      const expense = action.payload;
      const notValid = !expense.id || !expense.title || !expense.categoryID || expense.price;

      if(notValid) {
        throw new Error('VALIDATION ERROR: expense must have an id, category id, title and price');

      } else {
        return next(action);
      }
    } catch (err) {
      console.error(err);
    }
  } else {
    return next(action);
  }
}

export default validateExpense;
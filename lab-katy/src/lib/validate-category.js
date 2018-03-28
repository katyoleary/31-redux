'use strict';

const validateCategory = store => next => action => {
  const isCategory = action.type && action.type.startsWith('CATEGORY');

  if(isCategory) {
    try {
      const category = action.payload;
      const notValid = !category.id || !category.name || !category.budget;

      if(notValid) {
        throw new Error('VALIDATION ERROR: category must include an id, name and budget');
      } else {
        return next(action);
      }
    } catch(err) {
      console.error(err);
      return;
    }
  } else {
    return next(action);
  }
}

export default validateCategory;
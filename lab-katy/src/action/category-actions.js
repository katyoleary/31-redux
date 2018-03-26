'use strict';

import uuid from 'uuid/v1';

//no logic here, you'd have a helper function for that
export const categoryCreate = (category) => {
  category.id = uuid();
  category.timestamp = new Date();
  return {
    type: 'CATEGORY_CREATE', 
    payload: category,
  }
}

export const categoryUpdate = (category) => ({
  type: 'CATEGORY_UPDATE',
  payload: category,
})

export const categoryDestroy = (category) => ({
  type: 'CATEGORY_DESTROY', 
  payload: category,
})

export const categoryReset = () => ({ type: 'CATEGORY_RESET' })


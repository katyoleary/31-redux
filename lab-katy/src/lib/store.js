'use strict';

import {createStore} from 'redux';
import categories from '../reducer/category.js';
import {combineReducers} from 'redux';
import expenses from '../reducer/expense.js';

export default combineReducers({
  expenses, 
  categories
})

//using createStore (createAppStore) in another file as function call
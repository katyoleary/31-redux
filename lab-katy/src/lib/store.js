'use strict';

import {createStore} from 'redux';
import reducer from '../reducer/category.js';

export default () => createStore(reducer);

//using createStore (createAppStore) in another file as function call
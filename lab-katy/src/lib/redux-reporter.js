'use strict';

const reporter = store => next => action => {
  console.log('ACTION : REDUX REDUCER', action);

  try {
    let result = next(action);
    console.log('STATE : REDUX REPORTER', store.getState());
    return(result);
  } catch (err) {
    err.action = action;
    console.error('ERROR', err);
    return err;
  }
}

export default reporter;
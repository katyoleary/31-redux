'use strict';

import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import DashboardContainer from '../dashboard-container';
import rootReducer from '../../lib/store.js';
import { createStore } from 'redux';

const store = createStore(rootReducer);

//entire state managed here below. bc the route throws component. the store holds the state of our app. always wrap app in provider//things that you need to access in your application in your provider

class App extends React.Component {
  componentDidMount() {
    store.subscribe( () => {
      console.log('__STATE__', store.getState());
    });

    store.dispatch({ type: null })
  }

  render() {
    return (
      <section>
        <Provider store={store}>
          <BrowserRouter>
            <Route exact path='/' component={DashboardContainer} />
          </BrowserRouter>
        </Provider>
      </section>
    )
  }
}

export default App;

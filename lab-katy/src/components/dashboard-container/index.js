'use strict';

import React from 'react';
import {connect} from 'react-redux';

import { categoryDestroy } from '../../action/category-actions';


import CategoryList from '../category-list-container';
import CategoryForm from '../category-form';

export default class DashboardContainer extends React.Component {
  

  render() {
    return (
      <main className='dashboard-container'>
        <h2>Dash</h2>
        <CategoryForm />
        <CategoryList />
      </main>
    )
  }
}
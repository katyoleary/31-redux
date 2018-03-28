'use strict';

import React from 'react';
import {connect} from 'react-redux';

import { categoryDestroy, categoryCreate } from '../../action/category-actions';


import CategoryList from '../category-list-container';
import CategoryForm from '../category-form';

class DashboardContainer extends React.Component {
  

  render() {
    return (
      <main className='dashboard-container'>
        <h2>Dash</h2>
        <CategoryForm 
          buttonText='create a category' 
          onComplete={this.props.categoryCreate}/>
        <CategoryList />
      </main>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  categoryCreate: category => dispatch(categoryCreate(category))
})

export default connect(null, mapDispatchToProps)(DashboardContainer);

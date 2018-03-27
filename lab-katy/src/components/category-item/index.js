'use strict';

import React from 'react';
import { connect } from 'react-redux';

import CategoryForm from '../category-form';
import { categoryDestroy } from '../../action/category-actions';
import ExpenseItem from '../expense-item';

class CategoryItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        <li>
          <button onClick={() => this.props.destroyCategory(this.props.category.id)}>X</button>
          <h3>{this.props.category.name}</h3>
          <p>{this.props.category.budget}</p>
        </li>
        <li>
          <ExpenseList />
        </li>
      </ul>
    )
  }
}

///dispatching action
const mapDispatchToProps = (dispatch) => ({
  destroyCategory: categoryId => dispatch(categoryDestroy(categoryId))
})

export default connect(null, mapDispatchToProps)(CategoryItem);
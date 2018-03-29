'use strict';

import React from 'react';
import { connect } from 'react-redux';

import CategoryForm from '../category-form';
import { categoryDestroy, categoryUpdate } from '../../action/category-actions';
import { expenseCreate } from '../../action/expense-actions';
import ExpenseForm from '../expense-form';
import ExpenseList from '../expense-list-container';

class CategoryItem extends React.Component {
  constructor(props) { 
    super(props);
  }

  render() {
    return (
      <li>
          <button onClick={() => this.props.destroyCategory(this.props.category.id)}>X</button>
          <h3>{this.props.category.name}</h3>
          <p>{this.props.category.budget}</p>

          <CategoryForm 
            category={this.props.category}
            buttonText='update category'
            onComplete={this.props.updateCategory} />

          <ExpenseForm 
            buttonText='create an expense'
            onComplete={this.props.createExpense}
            categoryID={this.props.category.id}/>

          <ExpenseList 
            categoryID={this.props.category.id} />
      </li>
    ) //we have expense form
  }
}

///dispatching action
const mapDispatchToProps = (dispatch) => ({
  destroyCategory: categoryId => dispatch(categoryDestroy(categoryId)),
  createExpense: expense => dispatch(expenseCreate(expense)),
  updateCategory: category => dispatch(categoryUpdate(category)),

})

export default connect(null, mapDispatchToProps)(CategoryItem);
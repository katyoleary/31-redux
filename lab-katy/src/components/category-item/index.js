'use strict';

import React from 'react';
import { connect } from 'react-redux';

import CategoryForm from '../category-form';
import { categoryDestroy, categoryUpdate } from '../../action/category-actions';
import { expenseCreate } from '../../action/expense-actions';
import ExpenseForm from '../expense-form';
import ExpenseList from '../expense-list-container';

import './_category-item.scss';

class CategoryItem extends React.Component {
  constructor(props) { 
    super(props);

    // this.state = {
    //   totalBudget = props.category ? props.category.totalBudget : '', //dunno if i need this.
    // }
  }

  render() {
    return (
      <li className='category-item'>
          <h3>{this.props.category.name}</h3>
          <p>total: {this.props.category.budget}</p>
          <button className='x' onClick={() => this.props.destroyCategory(this.props.category)}>X</button>

          <CategoryForm 
            category={this.props.category}
            buttonText='update category'
            onComplete={this.props.updateCategory} />

          <h2>create a new expense</h2>
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
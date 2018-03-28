'use strict';

import React from 'react';
import { connect } from 'react-redux';

import ExpenseForm from '../expense-form';
import { expenseUpdate, expenseDestroy } from '../../action/expense-actions';


class ExpenseItem extends React.Component {
  render() {
    let {expense, expenseUpdate, expenseDestroy} = this.props;

    return( 
      <li className='expense-content'>
        <button onClick={() => this.props.destroyExpense(expense)}>X</button>
        <h2>{expense.title}</h2>
        <p>{expense.price}</p>
        
        <ExpenseForm 
          expense={expense}
          buttonText='update expense'
          onComplete={this.props.updateExpense} />
      </li>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  destroyExpense: expenseId => dispatch(expenseDestroy(expenseId)),
  updateExpense: expense => dispatch(expenseUpdate(expense))
})

export default connect (null, mapDispatchToProps)(ExpenseItem)

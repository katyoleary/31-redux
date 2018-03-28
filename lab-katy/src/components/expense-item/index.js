'use strict';

import React from 'react';
import {connect} from 'react-redux';

import ExpenseForm from '../expense-form';
import {expenseUpdate, expenseDestroy} from '../../action/expense-actions';


class ExpenseItem extends React.Component {
  render() {
    let {expense, expenseUpdate, expenseDestroy} = this.props;

    return( 
      <section className='expense-item'>
        <div>
          <div className='expense-content'>
            <button onClick={() => this.props.destroyExpense(expense)}>X</button>
            <h2>{expense.title}</h2>
            <p>{expense.price}</p>
          </div>
        </div>
      </section>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  destroyExpense: expenseId => dispatch(expenseDestroy(expenseId))
})

export default connect (null, mapDispatchToProps)(ExpenseItem)

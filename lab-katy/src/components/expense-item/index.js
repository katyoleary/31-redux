'use strict';

import React from 'react';
import {connect} from 'react-redux';

import ExpenseForm from '../expense-form';
import {expenseUpdate, expenseDelete} from '../../action/expense-actions';


class ExpenseItem extends React.Component {
  render() {
    let {expense, expenseUpdate, expenseDelete} = this.props;

    return( 
      <section className='expense-item'>
        <div>
            <div className='expense-content'>
              <h2>{expense.name}
            </div>
        </div>
      </section>
    )
  }
}



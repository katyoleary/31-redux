'use strict';

import React from 'react';
import {connect} from 'react-redux';

import {
  expenseCreate, 
  expenseUpdate, 
  expenseDestroy,
} from '../../action/expense-form';

import ExpenseForm from '../expense-form';

class DashboardContainer extends React.Component {
  componentDidMount() {
    this.props.expenseCreate({ title: 'testing' });
    this.props.expenseCreate({ title: 'again' })
  }

  render() {
    return (
      <main className='dashboard-container'>
        <h2>Dash</h2>

        <ExpenseForm
          buttonText='create an expense'
          onComplete={this.props.expenseCreate} />

        {this.props.expenses.map( item => 
          <div kejy={item.id}>
            <h3>{item.title}</h3>
          </div>
          )}
      </main>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    expenses: state
  }
}

const mapDispatchToProps = (dispatch, getState) => {
  return {
    expenseCreate: (expense) => dispatch(expenseCreate(expense)), //returns an obj literal
    expenseUpdate: (expense) => dispatch(expenseUpdate(expense)),
    expenseDestroy: (expense) => dispatch(expenseDestroy(expense)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
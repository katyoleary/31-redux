'use strict';

import React from 'react';
import {connect} from 'react-redux';

import ExpenseItem from '../expense-item';

class ExpenseList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('ex list container expenses', this.props.expenses)

    const categoryExpenses = this.props.expenses.filter( expense =>
      expense.categoryID === this.props.categoryID
    );

    console.log('cat ex ', this.props.categoryID, this.props.expenses)

    return (
      <ul>
        
        {categoryExpenses.map((expense, i) => 
          <ExpenseItem categoryID={this.props.categoryID} expense={expense} key={`expense-item-${i}`} />
        )}

      </ul>
    )
  }
}

const mapStateToProps = state => {
  console.log('map', state)
  return ({
    expenses: state.expenses
  })
}

export default connect(mapStateToProps)(ExpenseList);
'use strict';

import React from 'react';
import {connect} from 'react-redux';

import ExpenseItem from '../expense-item';

class ExpenseList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        
        {this.props.expenses.map((expense, i) => 
          <ExpenseItem expense={expense} key={`expense-item-${i}`} />
        )}
      </ul>
    )
  }
}

const mapStateToProps = state => {
  return ({
    expenses: state.expenses
  })
}

export default connect(mapStateToProps)(ExpenseList);
'use strict';

import React from 'react';
import uuid from 'uuid/v1';
import { connect } from 'react-redux';

import { expenseCreate } from '../../action/expense-actions';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.expense ? props.expense.title : '',
      price: props.expense ? props.expense.price : '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(props) { //this is really helpful. lifecycle hook
    if (props.expense) {
      this.setState(props.expense);
    }

    if(props.categoryID) {
      this.setState({ categoryID: props.categoryID });
    }
  } //this is an event listener. really helpful when we're waiting to hear back from an API

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete({...this.props.expense, ...this.state, categoryID: this.props.categoryID }); 

    if(!this.props.expense) {
      this.setState({ title: '' });
      this.setState({ price: '' });
    }
  }

  render() {
    return (
      <form className='expense-form' onSubmit={this.handleSubmit}>
        <input 
          name='title'
          type='text'
          placeholder='title'
          value={this.state.title}
          onChange={this.handleChange} />

        <input 
          name='price'
          type='number'
          placeholder='price'
          value={this.state.price}
          onChange={this.handleChange} />

        <button className='update' type='submit'>{this.props.buttonText}</button>

      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  handleExpenseSubmit: expense => dispatch(expenseCreate(expense))
})

export default connect(null, mapDispatchToProps)(ExpenseForm);
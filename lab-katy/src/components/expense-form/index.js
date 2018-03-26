'use strict';

import React from 'react';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.expense ? props.expense.title : '',
      budget: props.expense ? props.expense.budget : '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value }) //CHECK THIS
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(Object.assign({}, this.state)) //Object.assign is what allows us to deal with rest and spread
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
          name='budget'
          type='number'
          placeholder='budget'
          value={this.state.budget}
          onChange={this.handleChange} />

        <button type='submit'>{this.props.buttonText}</button>

      </form>
    )
  }
}

export default ExpenseForm;
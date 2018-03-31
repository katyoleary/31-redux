'use strict';

import React from 'react';
import uuid from 'uuid/v1';
import { categoryCreate } from '../../action/category-actions';
import {connect} from 'react-redux';

import './_category-form.scss';

class CategoryForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.category ? props.category.name : '',
      budget: props.category ? props.category.budget : '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('hey', this.props.category)
    this.props.onComplete({...this.props.category, ...this.state });
    
    if(!this.props.category) {
      this.setState({ name: '' });
      this.setState({ budget: '' });
    }
  }

  render() { //onSubmit works with pressing enter as well, better than onClick.
    return (
      <form className='category-form' onSubmit={this.handleSubmit}> 

        <input 
          name='name'
          type='text'
          placeholder='category name'
          value={this.state.name}
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

const mapDispatchToProps = (dispatch) => ({
  handleCategorySubmit: category => dispatch(categoryCreate(category))
})

export default connect(null, mapDispatchToProps)(CategoryForm);
'use strict';

import React from 'react'

import CategoryForm from '../category-form';

class CategoryItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        <button onClick={() => this.props.destroyCategory(this.props.category)}>X</button>
        <h3>{this.props.category.name}</h3>
        <p>{this.props.category.budget}</p>
        //add category update form
      </li>
    )
  }
}
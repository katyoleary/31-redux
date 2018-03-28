'use strict';

import React from 'react';
import {connect} from 'react-redux';

import CategoryItem from '../category-item';

class CategoryList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>

        {this.props.categories.map((category, i) => 
          <CategoryItem category={category} key={`category-item-${i}`} />
        )}
      </ul>
    )
  }
}

const mapStateToProps = state => {
  return ({
  categories: state.categories
})}


export default connect(mapStateToProps)(CategoryList);
import React, {Component} from 'react';
import {connect} from 'react-redux';

import {orderProduct} from './actions';

class Product extends Component {
  onOrderClick(){
    const {dispatch, data} = this.props;
    dispatch(orderProduct(data));
  }

  render() {
    const {data} = this.props;

    return (
      <div className={"col-xs-6"}>
        <h2>
          {data.name}
        </h2>
        <button
          onClick={this.onOrderClick.bind(this)}
          className={"btn btn-primary"}>
          Objednat
        </button>
      </div>
    )
  }
}

export default connect()(Product);

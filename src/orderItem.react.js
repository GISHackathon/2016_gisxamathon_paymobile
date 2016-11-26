import React, {Component} from 'react';
import {connect} from 'react-redux';

class OrderItem extends Component {
  constructor(props) {
    super(props);
  }

  onClick (evt) {
    const {dispatch} = this.props;
    evt.preventDefault();
    dispatch({type:'test_action'})
  }


  getContentByState(state) {
    const {data, onChecked, onDistributed} = this.props;
    switch (state) {
      case 'prepare':
        return null;
        break;
      case 'checkin':
        // return <button onClick={() => {onChecked(data)}}>odbavit</button>
        return null;
        break;
      case 'distribute':
        return <button onClick={()=>{onDistributed(data)}}>vyřízeno</button>
        break;
      case 'done':
        return null
        break;
    }
  }

  render() {
    const {data, state, onChecked, onDistributed} = this.props;
    const content = this.getContentByState(state)
    return (
      <div>
        <h3>
          {data.client.name}
        </h3>
        {content}
        <span>{data.order[0].name}</span>
        <div>Počet: {data.order[0].quantity}</div>
      </div>
    )
  }
}

export default connect()(OrderItem);

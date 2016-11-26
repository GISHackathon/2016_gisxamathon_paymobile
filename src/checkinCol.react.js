import React, {Component} from 'react';
import OrderItem from './orderItem.react';

export default class CheckinCol extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {data:{items}} = this.props;

    const itemsElms = items ? items.map((dataItem, key) => {
      return <OrderItem state={'checkin'} data={dataItem} key={dataItem.id || key}/>
    }) : null;

    return (
      <div className={"col-xs-3"}>
        <h2>
          ODBAVIT
        </h2>
        {items}
      </div>
    )
  }
}

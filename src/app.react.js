import {connect} from 'react-redux';
import Product from './product.react'
import React, {Component} from 'react';
import {loadProducts} from './actions';

class App extends Component {

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(loadProducts());
  }

  render() {
    const {state:{products}} = this.props;

    const productsElms = products.map((productData, key) => {
      return <Product data={productData} key={key}/>
    })

    return (
      <div>
        <nav className={"navbar navbar-fixed-top navbar-dark bg-inverse"}>
          <a className={"navbar-brand"} href="#">Dashboard</a>
          <ul className={"nav navbar-nav"}>
            <li className={"nav-item active"}>
              <a className={"nav-link"} href="#">
                products
                <span className={"sr-only"}>(current)</span>
              </a>
            </li>
          </ul>
        </nav>
        <div className={"container"}>
          <div className={"dashboard-table"}>
            <h1>Zboží</h1>
            {productsElms}
          </div>
        </div>
      </div>
    )
  }
}

const select = (state) => {
  return {state:state};
};

export default connect(select)(App);

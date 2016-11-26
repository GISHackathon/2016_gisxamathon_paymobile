import {connect} from 'react-redux';
import PrepareCol from './prepareCol.react'
import CheckinCol from './checkinCol.react'
import DistributeCol from './distributeCol.react'
import DoneCol from './doneCol.react'
import React, {Component} from 'react';
import {loadOrders} from './actions';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {dispatch, state:{reloading, uploading}} = this.props;

    setInterval(() => {
      dispatch(loadOrders(dispatch, reloading, uploading));
    }, 2000);
  }

  render() {
    const {state:{reloading, uploading,dashboard:{prepare, checkin, distribute, done}}} = this.props;
    return (
      <div>
        <nav className={"navbar navbar-fixed-top navbar-dark bg-inverse"}>
          <a className={"navbar-brand"} href="#">Dashboard</a>
          <ul className={"nav navbar-nav"}>
            <li className={"nav-item active"}>
              <a className={"nav-link"} href="#">
                dashboard
                <span className={"sr-only"}>(current)</span>
              </a>
            </li>
          </ul>
        </nav>
        <div className={"container"}>
          <div className={"dashboard-table"}>
            <h1>Dashboard</h1>
            <h2>LOADING: {reloading ? 'reloading' : 'idle'}</h2>
            <h2>UPLOADING: {uploading ? 'uploading' : 'idle'}</h2>
              <div className={"row"}>
                <PrepareCol data={prepare} />
                <CheckinCol data={checkin} />
                <DistributeCol data={distribute} />
                <DoneCol data={done} />
              </div>
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

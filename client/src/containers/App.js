import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as actions from '../store/actions';

import Layout from './layout/Layout';
import Landing from '../components/Landing';
import Dashboard from './Dashboard';
import Login from '../components/Login';

class App extends Component {
  componentDidMount = () => {
    this.props.fetchCurrentUser();
  };

  render() {
    return (
      <Router>
        {/* TODO: Layout preventing React Router from rendering new view on route change */}
        <Layout>
          <Switch>
            <Route path="/login" component={Login} />
            {/* TODO: don't render anything if auth state null to prevent render flashes */}
            <Route
              exact
              path="/"
              component={this.props.auth ? Dashboard : Landing}
            />
          </Switch>
        </Layout>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  actions
)(App);

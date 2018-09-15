import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as actions from '../store/actions';

import Loading from '../components/UI/Loading/Loading';
import Layout from './Layout/Layout';
import Landing from '../components/Landing';
import Dashboard from './Dashboard';

class App extends Component {
  componentDidMount = () => {
    this.props.fetchCurrentUser();
  };

  renderContent = () => {
    const { auth, isFetching } = this.props;
    if (isFetching) return <Loading />;
    return (
      <Router>
        <Switch>
          <Layout>
            <Route exact path="/" component={auth ? Dashboard : Landing} />
          </Layout>
        </Switch>
      </Router>
    );
  };

  render() {
    return this.renderContent();
  }
}

const mapStateToProps = ({ auth, isFetching }) => ({
  auth,
  isFetching,
});

export default connect(
  mapStateToProps,
  actions
)(App);

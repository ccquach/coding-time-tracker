import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as actions from '../store/actions';

import Aux from '../hoc/Auxiliary';
import Header from './Layout/Header';
import Footer from '../components/Layout/Footer';
import Loading from '../components/UI/Loading/Loading';
import Error from './UI/Error';
import Landing from '../components/Landing';
import Dashboard from './Dashboard';
import Login from '../components/Login';

class App extends Component {
  componentDidMount = () => {
    this.props.fetchCurrentUser();
  };

  renderContent = () => {
    const { auth, error, isFetching } = this.props;
    if (isFetching) return <Loading />;
    return (
      <Aux>
        {auth ? <Header /> : null}
        {error.message ? <Error /> : null}
        <Switch>
          <Route path="/login" component={Login} />
          <Route exact path="/" component={auth ? Dashboard : Landing} />
        </Switch>
        <Footer />
      </Aux>
    );
  };

  render() {
    return <Router>{this.renderContent()}</Router>;
  }
}

const mapStateToProps = ({ auth, error, isFetching }) => ({
  auth,
  error,
  isFetching,
});

export default connect(
  mapStateToProps,
  actions
)(App);

import React from 'react';
import { connect } from 'react-redux';

import Aux from '../../hoc/Auxiliary';
import Header from './Header';
import Footer from '../../components/Layout/Footer';
import Navbar from '../../components/Layout/Navbar';
import Error from '../UI/Error';

const Layout = ({ children, auth, error }) => (
  <Aux>
    <div className="row">
      <div className="col s12">{auth ? <Header /> : null}</div>
    </div>
    <div className="row">
      <div className="col s3">
        <Navbar />
      </div>
      <div className="col s9">
        {error.message ? <Error /> : null}
        {children}
      </div>
    </div>
    <Footer />
  </Aux>
);

const mapStateToProps = ({ auth, error }) => ({
  auth,
  error,
});

export default connect(mapStateToProps)(Layout);

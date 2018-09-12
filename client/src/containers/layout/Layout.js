import React from 'react';
import { connect } from 'react-redux';

import Aux from '../../hoc/Auxiliary';
import Header from './Header';
import Footer from '../../components/layout/Footer';

const Layout = ({ children, auth }) => {
  return (
    <Aux>
      {auth ? <Header /> : null}
      {children}
      <Footer />
    </Aux>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Layout);

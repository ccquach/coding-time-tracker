import React from 'react';
import { connect } from 'react-redux';

import Aux from '../../hoc/Auxiliary';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import Error from '../UI/Error';

const Layout = ({ children, auth, error }) => (
  <Aux>
    {auth ? <Header /> : null}
    <main>
      <div className="container">{children}</div>
      {error.message ? <Error /> : null}
    </main>
    <Footer auth={auth} />
  </Aux>
);

const mapStateToProps = ({ auth, error }) => ({
  auth,
  error,
});

export default connect(mapStateToProps)(Layout);

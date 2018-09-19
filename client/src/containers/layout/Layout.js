import React from 'react';
import { connect } from 'react-redux';

import Aux from '../../hoc/Auxiliary';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import ActionButton from '../../components/UI/ActionButton';
import Error from '../UI/Error';

const Layout = ({ children, auth, error }) => (
  <Aux>
    {auth && <Header />}
    <main>
      <div className="container">{children}</div>
      {auth && <ActionButton />}
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

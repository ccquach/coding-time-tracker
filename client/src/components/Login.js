import React from 'react';
import styled from 'styled-components';
import colors from '../styles/colors';

// #region styles
const Container = styled.div`
  background: #fff;
  width: 30%;
  margin: 4em auto;
  overflow: hidden;
  position: relative;
  border-radius: 0.3em;
  text-align: center;
`;

const Heading = styled.div`
  font-size: 1.5rem;
  letter-spacing: 0.5px;
  background: ${colors.hex.primary};
  color: ${colors.hex.greyLight};
  text-transform: uppercase;
  padding: 1em;
`;

const ButtonsContainer = styled.div`
  padding: 2rem;
`;

const Button = styled.a`
  min-width: 80%;
  padding: 0 3rem;

  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;
//#endregion

const Login = () => {
  return (
    <Container className="z-depth-2">
      <Heading className="heading">Login with</Heading>
      <ButtonsContainer>
        {/* TODO: map over array of objects to render buttons */}
        <Button
          href="/auth/google"
          className="waves-effect waves-light btn google-plus red darken-1"
        >
          <i className="fa fa-google-plus left" aria-hidden="true" />
          <span className="right">Sign in with Google</span>
        </Button>
      </ButtonsContainer>
    </Container>
  );
};

export default Login;

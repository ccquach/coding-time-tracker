import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../styles/colors';

import Hero from '../images/hero.jpg';

// #region styles
const Wrapper = styled.main`
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${Hero});
  background-size: cover;
  background-position: bottom;
`;

const Heading = styled.h1`
  font-size: 6em;
  font-weight: 300;
  text-transform: uppercase;
  text-align: center;
  text-shadow: 0 0 0.75px #000;
  letter-spacing: 0.5px;
  line-height: 1;
  margin: 0 auto;
`;

const MainHeading = styled.span`
  display: block;
  margin-bottom: 2rem;
`;

const SubHeading = styled.span`
  display: block;
  margin-bottom: 2.5rem;
  text-transform: none;
  font-size: 2.5rem;
`;
// #endregion
// TODO: add pulse animation on button hover

const Landing = () => {
  const { text, base } = colors;
  return (
    <Wrapper className="valign-wrapper">
      <Heading className={text.greyLight}>
        <MainHeading>Coding Time Tracker</MainHeading>
        <SubHeading>Set goals. Track progress. Commit to Learning.</SubHeading>
        <Link
          to="/login"
          className={`waves-effect waves-light btn btn-large ${base.secondary}`}
        >
          {/* TODO: fix hover effect loss on button default color change */}
          <i className="material-icons right">chevron_right</i>
          Start tracking now
        </Link>
      </Heading>
    </Wrapper>
  );
};

export default Landing;

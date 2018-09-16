import React from 'react';
import styled from 'styled-components';

import BackgroundImage from '../../images/modal-bg.jpg';

const Wrapper = styled.div`
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-position: center;
  width: 50%;
  min-width: 30rem;
  max-width: 60rem;
`;

const Modal = ({ children, id }) => {
  return (
    <Wrapper id={id} className="modal">
      <div className="modal-content">{children}</div>
    </Wrapper>
  );
};

export default Modal;

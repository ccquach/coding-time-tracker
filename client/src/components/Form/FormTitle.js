import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.h3`
  font-size: 2rem;
  margin-bottom: 3rem;
`;

const FormTitle = ({ children }) => <Wrapper>{children}</Wrapper>;

export default FormTitle;

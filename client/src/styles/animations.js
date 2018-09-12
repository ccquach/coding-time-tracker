import keyframes from 'styled-components';

const pulse = keyframes`
  from {
    opacity: 0;
    transform: scale(1);
  }

  to {
    opacity: 1;
    transform: scale(1.5);
  }
`;

export default {
  pulse,
};

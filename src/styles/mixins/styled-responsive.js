import { css } from 'styled-components';

export const MD = (styles) => css`
  @media (min-width: 768px) {
    ${styles}
  }
`;

export const LG = (styles) => css`
  @media (min-width: 1024px) {
    ${styles}
  }
`;

export const XL = (styles) => css`
  @media (min-width: 1056px) {
    ${styles}
  }
`;

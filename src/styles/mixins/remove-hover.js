import { css } from 'styled-components';

export function removeHover(styles) {
  return css`
    @media (hover: hover) and (pointer: fine) {
      ${styles}
    }
  `;
}

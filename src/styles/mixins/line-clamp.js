import { css } from 'styled-components';

export const lineClamp = (line) => {
  return css`
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${line};
  `;
};

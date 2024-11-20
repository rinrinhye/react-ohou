import { textStyle } from 'styles/mixins/text-style';

const { default: styled } = require('styled-components');

const Icon = styled.span`
  flex-basis: 24px;
  flex-shrink: 0;
  width: 24px;
  margin-right: 8px;
  text-align: center;

  &::after {
    display: block;
  }
`;

export const Up = styled(Icon)`
  position: relative;

  &::after {
    position: absolute;
    left: 4px;
    width: 0;
    height: 0;
    content: '';
    transform: translateX(50%);

    top: 3px;
    border: 5px solid ${({ theme }) => theme.colors.red};
    border-top: 5px solid transparent;
    border-right: 5px solid transparent;
    border-left: 5px solid transparent;
  }
`;

export const Down = styled(Icon)`
  position: relative;

  &::after {
    position: absolute;
    left: 4px;
    width: 0;
    height: 0;
    content: '';
    transform: translateX(50%);

    top: 7px;
    border: 5px solid ${({ theme }) => theme.colors.blue};
    border-right: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 5px solid transparent;
  }
`;

export const New = styled(Icon)`
  &::after {
    ${textStyle(10)}
    color: ${({ theme }) => theme.colors.red};
    font-weight: 500;
    text-align: center;
    content: 'new';
  }
`;

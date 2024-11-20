import styled from 'styled-components';
import { textStyle } from '../mixins/text-style';

export const Button40 = styled.button`
  ${textStyle(14)}

  height: 40px;
  padding: 0 16px;
  font-weight: 400;
  line-height: 40px;
  border-radius: 4px;
`;

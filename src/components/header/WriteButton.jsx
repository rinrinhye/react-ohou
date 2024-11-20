import styled from 'styled-components';
import { HideMobile } from 'styles/react-responsive';
import { Button40 } from 'styles/modules/Btn40';
import { LG } from 'styles/mixins/styled-responsive';

export default function WriteButton() {
  return (
    <HideMobile>
      <StyledButton>글쓰기</StyledButton>
    </HideMobile>
  );
}

const StyledButton = styled(Button40)`
  background: ${({ theme }) => theme.colors.ohouBlue};
  color: ${({ theme }) => theme.colors.white};
  margin-left: 10px;

  &:hover {
    background: ${({ theme }) => theme.colors.ohouBlueActive};
  }

  ${LG`
      position: relative;
      padding-right: 40px;

      &::after {
        position: absolute;
        top: 11px;
        right: 18px;
        display: block;
        width: 9px;
        height: 9px;
        border-right: 2px solid ${({ theme }) => theme.colors.white};
        border-bottom: 2px solid ${({ theme }) => theme.colors.white};
        content: '';
        transform: rotate(45deg);
      }

  `}
`;

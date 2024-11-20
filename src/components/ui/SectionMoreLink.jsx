import styled from 'styled-components';
import { HideMobile } from 'styles/react-responsive';
import { textStyle } from 'styles/mixins/text-style';
import { MD } from 'styles/mixins/styled-responsive';

export default function SectionMoreLink({ text }) {
  return <StyledMoreLink href=''>{text}</StyledMoreLink>;
}

const StyledMoreLink = styled.a`
  ${textStyle(14)}

  position: relative;
  z-index: ${({ theme }) => theme.zIndex.sectionMoreLink};
  display: inline-block;
  width: 100%;
  margin-top: 20px;
  line-height: 44px;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;

  &:hover {
    background: ${({ theme }) => theme.colors.whiteHover};
  }

  ${MD`display:none;`}
`;

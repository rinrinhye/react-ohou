import styled from 'styled-components';
import { textStyle } from 'styles/mixins/text-style';
import { lineClamp } from 'styles/mixins/line-clamp';

export default function TitleGroup({ brandName, title }) {
  return (
    <StyledTitleGroup className='product__title-group'>
      <Brand className='product__brand'>{brandName}</Brand>
      <Title className='product__title'>{title}</Title>
    </StyledTitleGroup>
  );
}

const StyledTitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Brand = styled.span`
  ${textStyle(11)}
  color:${({ theme }) => theme.colors.fontGray2}
`;

const Title = styled.strong`
  ${lineClamp(3)}
  ${textStyle(14)}

color: ${({ theme }) => theme.colors.fontGray1}
`;

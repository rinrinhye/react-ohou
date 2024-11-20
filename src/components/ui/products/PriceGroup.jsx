import styled from 'styled-components';
import PriceMore from './PriceMore';
import { textStyle } from 'styles/mixins/text-style';

export default function PriceGroup({ discountRate, price, otherProducts }) {
  return (
    <StyledPriceGroup className='product__price-group'>
      <StyleddiscountRate>{discountRate} %</StyleddiscountRate>
      <span>{price.toLocaleString()}</span>
      {otherProducts && <PriceMore />}
    </StyledPriceGroup>
  );
}

const StyledPriceGroup = styled.div`
  ${textStyle(20)}

  display: flex;
  align-items: center;
  font-weight: 700;
`;

const StyleddiscountRate = styled.div`
  color: ${({ theme }) => theme.colors.ohouBlue};
`;

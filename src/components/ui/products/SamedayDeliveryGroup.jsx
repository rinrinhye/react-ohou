import styled from 'styled-components';
import IcoSamedayDelivery from 'assets/ico_same_day_delivery.png';
import { textStyle } from 'styles/mixins/text-style';

export default function SamedayDeliveryGroup({ sameDelivery }) {
  return (
    <StyledSamedayDelveryGroup className='badge--sameday-delivery'>
      <img
        src={IcoSamedayDelivery}
        alt=''
      />
      <span>평일 {sameDelivery.time}까지 결제시</span>
    </StyledSamedayDelveryGroup>
  );
}

const StyledSamedayDelveryGroup = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-top: 4px;
  gap: 4px;

  img {
    height: 15px;
  }

  span {
    ${textStyle(12)}
    color: ${({ theme }) => theme.colors.blue};
  }
`;

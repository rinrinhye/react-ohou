import { StyledBadgePaymentDiscount } from 'styles/modules/badge';
import IcoCard from 'assets/ico_card.png';

export default function BadgePaymentDiscount(paymentDiscount) {
  <StyledBadgePaymentDiscount className='badge--payment-discount'>
    <img
      src={IcoCard}
      alt=''
    />
    <span>최대 {paymentDiscount.percent}% 결제할인</span>
  </StyledBadgePaymentDiscount>;
}

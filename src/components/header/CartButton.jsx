import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { HeaderButtons } from 'components/ui/SearchButton';

import ImageIcoCart from 'assets/ico_cart.svg';
import ImageIcoCartBlue from 'assets/ico_cart_blue.svg';

export default function CartButton() {
  return (
    <StyledCartButton
      as={Link}
      to=''
      aria-label='장바구니 보러가기'
    ></StyledCartButton>
  );
}

const StyledCartButton = styled(HeaderButtons)`
  display: block;
  background-image: url(${ImageIcoCart});

  &:hover {
    background-image: url(${ImageIcoCartBlue});
  }
`;

import styled from 'styled-components';
import { Mobile } from 'styles/react-responsive';

import ImageHamburger from 'assets/ico_menu.svg';

export default function HamburgerButton(params) {
  return (
    <Mobile>
      <Button aria-label='메뉴 열기'></Button>
    </Mobile>
  );
}

const Button = styled.button`
  width: 36px;
  height: 36px;
  cursor: pointer;
  background: url(${ImageHamburger}) no-repeat;
  background-size: contain;
`;

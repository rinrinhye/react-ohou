import { useState } from 'react';
import HeaderBottom from './HeaderBottom';
import HeaderTop from './HeaderTop';
import styled from 'styled-components';

export default function Header() {
  const [gnb, setGnb] = useState('커뮤니티');

  function handleGnbClick(e) {
    setGnb(e.target.textContent);
  }

  return (
    <StyledHeader>
      <HeaderTop
        handleGnbClick={handleGnbClick}
        gnb={gnb}
      ></HeaderTop>
      <HeaderBottom gnb={gnb}></HeaderBottom>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 3000;
  width: 100%;
  transform: translateY(0);
  transition: transform 0.1s;
`;

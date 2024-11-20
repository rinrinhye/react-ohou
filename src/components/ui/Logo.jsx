import { Link } from 'react-router-dom';
import styled from 'styled-components';
import imageLogo from 'assets/logo.svg';
import { MD } from 'styles/mixins/styled-responsive';

export default function Logo() {
  return (
    <StyledLogo>
      <Link
        to='/'
        aria-label='오늘의 집 메인 페이지'
      ></Link>
    </StyledLogo>
  );
}

const StyledLogo = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 71px;
  height: 28px;
  transform: translate(-50%, -50%);

  & a {
    display: block;
    width: 100%;
    height: 100%;
    background: url(${imageLogo}) no-repeat;
    background-size: contain;
  }

  ${MD`
       position: static;
       margin-right: 20px;
      transform: translate(0);
    `}
`;

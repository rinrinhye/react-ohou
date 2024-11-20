import styled, { css } from 'styled-components';
import Gnb from './HeaderGnb';
import HeaderSearch from './HeaderSearch';
import Logo from 'components/ui/Logo';
import HamburgerButton from 'components/header/HamburgerButton';
import SearchButton from 'components/ui/SearchButton';
import WriteButton from 'components/header/WriteButton';
import CartButton from 'components/header/CartButton';
import { LG, MD, XL } from 'styles/mixins/styled-responsive';
import {
  HideMobile,
  LargeDesktop,
  HideSmallDesktopPlus,
} from 'styles/react-responsive';
import { Link } from 'react-router-dom';
import { textStyle } from 'styles/mixins/text-style';
import HeaderGnb from './HeaderGnb';

export default function HeaderTop({ gnb, handleGnbClick }) {
  return (
    <Top>
      <Wrap>
        <Left>
          <HamburgerButton />
          <Logo />
          <HeaderGnb
            gnb={gnb}
            handleGnbClick={handleGnbClick}
          />
        </Left>
        <Right>
          <HeaderSearch />

          <HideSmallDesktopPlus>
            <SearchButton />
          </HideSmallDesktopPlus>

          <CartButton />
          <HideMobile>
            <LinkGroup className='header__auth-group sm-hidden'>
              <a href=''>로그인</a>
              <a href=''>회원가입</a>
              <LargeDesktop>
                <Link
                  to=''
                  className='xl-only'
                >
                  고객센터
                </Link>
              </LargeDesktop>
            </LinkGroup>
          </HideMobile>
          <WriteButton />
        </Right>
      </Wrap>
    </Top>
  );
}

export const headerWrapStyles = css`
  position: relative;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${MD`
   padding: 0 40px;
  `}

  ${LG`
   padding: 0 60px;
  `}

  ${XL`
  margin: 0 auto;
  max-width:1256px;
  `}
`;

const Top = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Wrap = styled.div`
  ${headerWrapStyles}
  height: 50px;

  ${MD`
       height:80px
  `}
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
`;

const LinkGroup = styled.div`
  margin-left: 12px;

  & a {
    ${textStyle(14)}

    position: relative;
    padding: 10px;

    &:not(:first-child)::before {
      position: absolute;
      top: 50%;
      left: 0;
      display: block;
      width: 1px;
      height: 20px;
      color: ${({ theme }) => theme.colors.fontGray4};
      background: ${({ theme }) => theme.colors.backgroun4};
      content: '';
      transform: translateY(-50%);
    }
  }
`;

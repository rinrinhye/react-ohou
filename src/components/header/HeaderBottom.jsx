import styled from 'styled-components';
import HeaderLnb from '../header/HeaderLnb';
import { headerWrapStyles } from './HeaderTop';
import { MD } from 'styles/mixins/styled-responsive';
import { HideMobile } from 'styles/react-responsive';
import PopularSearchKeyword from 'components/ui/PopularSearchKeyword';

export default function HeaderBottom({ gnb }) {
  return (
    <Bottom>
      <Wrap>
        <Left>
          <HeaderLnb gnb={gnb}></HeaderLnb>
        </Left>
        <HideMobile>
          <Right>
            <RightContent className='header__popular-search-terms__search-keyword'>
              <PopularSearchKeyword
                item={{
                  keyword: '미닉스 음식물 처리기',
                  status: 'up',
                  rank: 1,
                }}
              />
              <Button
                className='header__popular-search-terms__button'
                aria-label='인기 검색어 팝업 열기'
              ></Button>
            </RightContent>
          </Right>
        </HideMobile>
      </Wrap>
    </Bottom>
  );
}

const Bottom = styled.div`
  width: 100%;
  height: 40px;
  background: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  ${MD`
     height:50px
`}
`;

const Wrap = styled.div`
  ${headerWrapStyles}
  display: flex;
`;

const Left = styled.div`
  width: 100%;
  flex: 1 1 50%;
  width: 50%;
`;
const Right = styled.div`
  flex: 0 0 192px;
`;

const RightContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Button = styled.button`
  position: relative;
  width: 30px;
  height: 30px;
  cursor: pointer;

  &::after {
    position: absolute;
    top: 6px;
    left: 15px;
    display: block;
    width: 8px;
    height: 8px;
    border-right: 2px solid ${({ theme }) => theme.colors.fontGray2};
    border-bottom: 2px solid ${({ theme }) => theme.colors.fontGray2};
    content: '';
    transform: rotate(45deg);
  }
`;

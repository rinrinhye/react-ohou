import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { textStyle } from 'styles/mixins/text-style';
import { MD } from 'styles/mixins/styled-responsive';
import { HideMobile } from 'styles/react-responsive';

export default function HeaderLnb({ gnb }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (gnb === '커뮤니티') {
      setIndex(0);
    } else if (gnb === '쇼핑') {
      setIndex(1);
    } else if (gnb === '인테리어생활') {
      setIndex(2);
    } else {
      setIndex(0);
    }
  }, [gnb]);

  const lists = [
    [
      '홈',
      '추천',
      '#채널',
      '집들이',
      '집사진',
      '3D인테리어',
      '살림수납',
      '반려동물',
      '육아',
      '홈스토랑',
      '플랜테리어',
      '콜렉터블',
      '캠핑',
      '취미',
      '핫플레이스',
      '이벤트',
    ],
    [
      '쇼핑홈',
      '카테고리',
      '베스트',
      '오늘의딜',
      '리퍼마켓',
      '단독상품',
      '빠른배송',
      '오!쇼룸',
      '바이너리샵',
      '기획전',
    ],
    [
      '홈',
      '주거공간시공',
      '상업공간시공',
      '시공자재랭킹',
      '제품설치',
      '이사',
      '집보기체크리스트',
      '아파트시공사례',
    ],
  ];

  return (
    <StyledHeaderLnb className='header__lnb'>
      <List>
        {lists[index].map((list) => {
          return (
            <Item className='header__lnb-item'>
              <a href=''>{list}</a>
            </Item>
          );
        })}
      </List>
      <HideMobile>
        <Button
          type='button'
          aria-label='메뉴 전체보기'
        ></Button>
      </HideMobile>
    </StyledHeaderLnb>
  );
}

const StyledHeaderLnb = styled.nav`
  width: 100%;
  height: 40px;

  &::after {
    position: absolute;
    top: 1px;
    right: 0;
    bottom: 1px;
    display: block;
    width: 100px;
    cursor: pointer;
    background: linear-gradient(
      to right,
      #ffffff00 0%,
      rgb(255, 255, 255, 50) 50%
    );
    content: '';
  }

  ${MD`
    position:relative;
    display:flex;
    height:50px;
  `}
`;

const List = styled.ul`
  display: flex;
  height: 100%;
  overflow-x: scroll;
  overflow-y: hidden;

  ${MD`
      overflow: hidden;
      gap: 12px;
  `}
`;

const Item = styled.li`
  a {
    ${textStyle(14)}
    display: block;
    padding: 11px 5px;
    font-weight: 700;
    white-space: nowrap;
  }

  ${MD`
    position: relative;
      display: flex;
      align-items: center;
      height: 100%;

      a {
          ${textStyle(16)}
        padding: 13px 6px;
      }

  `}
`;

const Button = styled.button`
  position: relative;
  z-index: 1;
  flex-shrink: 0;
  width: 36px;
  cursor: pointer;

  &::after {
    position: absolute;
    top: 37%;
    left: 50%;
    display: block;
    width: 6px;
    height: 6px;
    border-right: 1px solid ${({ theme }) => theme.colors.fontGray1};
    border-bottom: 1px solid ${({ theme }) => theme.colors.fontGray1};
    content: '';
    transform: translateX(-50%) rotate(45deg);
  }
`;

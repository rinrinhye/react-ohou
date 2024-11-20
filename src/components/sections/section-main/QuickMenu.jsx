import styled from 'styled-components';
import menu01 from '../../../../src/assets/menu_01.png';
import menu02 from '../../../../src/assets/menu_02.png';
import menu03 from '../../../../src/assets/menu_03.png';
import menu04 from '../../../../src/assets/menu_04.png';
import menu05 from '../../../../src/assets/menu_05.png';
import menu06 from '../../../../src/assets/menu_06.png';
import menu07 from '../../../../src/assets/menu_07.png';
import menu08 from '../../../../src/assets/menu_08.png';
import menu09 from '../../../../src/assets/menu_09.png';
import menu10 from '../../../../src/assets/menu_10.png';
import { LG, MD } from 'styles/mixins/styled-responsive';
import { textStyle } from 'styles/mixins/text-style';

export default function QuickMenu(params) {
  const quickMenuItems = [
    {
      text: '리빙특가',
      src: menu01,
    },
    { text: '오늘의딜', src: menu02 },
    { text: '집들이', src: menu03 },
    { text: '행운출첵', src: menu04 },
    { text: '살림살이', src: menu05 },
    { text: '크리에이터', src: menu06 },
    { text: '오마트', src: menu07 },
    { text: '빠른배송', src: menu08 },
    { text: '리모델링', src: menu09 },
    { text: '입주청소', src: menu10 },
  ];

  return (
    <List>
      {quickMenuItems.map((item) => {
        return (
          <Item>
            <a href=''>
              <img
                src={item.src}
                alt=''
              />
              <span>{item.text}</span>
            </a>
          </Item>
        );
      })}
    </List>
  );
}

const List = styled.ul`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(5, 1fr);

  ${MD`
      grid-template-columns: repeat(10, 1fr);
  `}
`;
const Item = styled.li`
  max-width: 78px;

  a {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 6px;
  }

  img {
    flex-shrink: 1;
    width: 100%;
  }

  span {
    ${textStyle(12)}
  }

  ${LG`
    a {
        gap: 8px;
      }

      span {
        @include text-style(16);
      }

  `}
`;

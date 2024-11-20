import { HideMobile } from 'styles/react-responsive';
import styled from 'styled-components';

export default function HeaderGnb({ gnb, handleGnbClick }) {
  const lists = [
    {
      to: '',
      text: '커뮤니티',
    },
    {
      to: '',
      text: '쇼핑',
    },
    {
      to: '',
      text: '인테리어/생활',
    },
  ];

  return (
    <HideMobile>
      <GnbList id='gnb'>
        {lists.map((item) => {
          return (
            <div>
              <GnbLink
                gnb={gnb}
                to={item.to}
                onClick={handleGnbClick}
              >
                {item.text}
              </GnbLink>
            </div>
          );
        })}
      </GnbList>
    </HideMobile>
  );
}

const GnbList = styled.nav`
  display: flex;
`;

const GnbLink = styled.a`
  padding: 20px 5px;
  margin: 0 10px;
  font-weight: 700;
  cursor: pointer;
  color: ${({ gnb, children, theme }) => {
    return gnb === children ? theme.colors.ohouBlue : theme.colors.fontBlack;
  }};

  &:hover {
    color: ${({ theme }) => theme.colors.ohouBlue};
  }
`;

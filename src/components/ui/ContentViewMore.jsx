import styled from 'styled-components';
import IcoRightArrow from 'assets/ico_right_arrow.svg';

export default function ContentViewMore() {
  return (
    <StyledContentViewMore>
      <Icon>
        <img
          src={IcoRightArrow}
          alt=''
        />
      </Icon>
      <span>더보기</span>
    </StyledContentViewMore>
  );
}

const Icon = styled.span`
  position: relative;
  display: block;
  width: 40px;
  height: 40px;
  background: ${({ theme }) => theme.colors.background2};
  border-radius: 50%;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 40%;
    height: 40%;
    transform: translate(-50%, -50%);
  }
`;

const StyledContentViewMore = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  cursor: pointer;
  gap: 4px;

  &:hover {
    ${Icon} {
      background: ${({ theme }) => theme.colors.background3};
    }
  }
`;

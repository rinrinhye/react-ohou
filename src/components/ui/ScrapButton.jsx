import styled, { css } from 'styled-components';
import IcoScrap from 'assets/ico_scrap.svg';

export default function ScrapButton() {
  return (
    <StyledScrapButton
      className='scrap-button'
      aria-label='스크랩 toggle'
    >
      <img
        src={IcoScrap}
        alt=''
      />
    </StyledScrapButton>
  );
}

const StyledScrapButton = styled.button`
  position: absolute;
  width: 24px;
  height: 24px;
  padding: 0;
  z-index: ${({ theme }) => theme.zIndex.scrapButton};
`;

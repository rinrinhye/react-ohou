import styled from 'styled-components';
import ImageIcoSearch from 'assets/ico_search.svg';
import ImageIcoSearchBlue from 'assets/ico_search_blue.svg';

export default function SearchButton() {
  return <Button aria-label='검색 팝업 열기'></Button>;
}

export const HeaderButtons = styled.button`
  width: 30px;
  height: 30px;
  cursor: pointer;
  background-repeat: no-repeat;
  background-size: contain;
`;

const Button = styled(HeaderButtons)`
  background-image: url(${ImageIcoSearch});
  margin-right: 8px;

  &:hover {
    background-image: url(${ImageIcoSearchBlue});
  }
`;

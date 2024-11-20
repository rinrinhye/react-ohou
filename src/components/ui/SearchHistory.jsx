import styled from 'styled-components';
import ImageCloseSmallGray from 'assets/ico_close_small_gray.svg';
import { textStyle } from 'styles/mixins/text-style';

export default function SearchHistory({
  keywords,
  onDeleteKeyword,
  onDeleteAllKeyword,
}) {
  return (
    <StyledSearchHistory>
      <Header>
        <span>최근 검색어</span>
        <AllDeleteButton onMouseDown={onDeleteAllKeyword}>
          전체 삭제
        </AllDeleteButton>
      </Header>
      <ul>
        {keywords.map((keyword) => {
          return (
            <Item>
              <Keyword href=''>{keyword}</Keyword>
              <KeywordDeleteButton
                onClick={onDeleteKeyword}
                aria-label='검색어 삭제'
              >
                <img
                  src={ImageCloseSmallGray}
                  alt=''
                />
              </KeywordDeleteButton>
            </Item>
          );
        })}
      </ul>
    </StyledSearchHistory>
  );
}

const StyledSearchHistory = styled.div`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  z-index: 5000;
  width: calc(100% - 20px);
  padding: 10px 0;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 7px 8px 10px;

  & span {
    ${textStyle(14)}
    color: ${({ theme }) => theme.colors.fontGray2};
  }
`;

const AllDeleteButton = styled.button`
  ${textStyle(13)}
  color:${({ theme }) => theme.colors.fontGray2};

  &:hover {
    opacity: 0.6;
  }
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  padding: 8px;

  &:hover {
    background: ${({ theme }) => theme.colors.background1};
  }
`;

const Keyword = styled.a`
  ${textStyle(14)}
  flex-grow: 1;
`;

const KeywordDeleteButton = styled.button`
  width: 24px;
  height: 24px;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    opacity: 0.6;
  }
`;

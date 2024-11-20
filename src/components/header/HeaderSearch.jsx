import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchHistory from 'components/ui/SearchHistory';
import SearchInput from 'components/ui/SearchInput';
import { ShowSmallDesktopPlus } from 'styles/react-responsive';
import styled from 'styled-components';

export default function HeaderSearch() {
  const [keywords, setKeywords] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [historyVisable, setHistoryVisable] = useState(false);

  const navigate = useNavigate();

  function onClickInput() {
    if (keywords.length === 0) {
      setHistoryVisable(false);
    } else {
      setHistoryVisable(true);
    }
  }

  function onDeleteAllKeyword() {
    setKeywords([]);
  }
  function onDeleteKeyword() {
    setKeywords([]);
    historyVisable(false);
  }

  function onBlurInput() {
    // setHistoryVisable(false);
  }
  function onChangeInput(e) {
    setKeyword(e.target.value);
  }
  function onSubmitInput(e) {
    e.preventDefault();
    if (keyword.trim().length === 0) return;
    setKeywords([...keywords, keyword]);
    navigate(`/search/${keyword}`);
    setKeyword('');
    setHistoryVisable(false);
  }

  return (
    <ShowSmallDesktopPlus>
      <StyledHeaderSearchGroup className='header__search-group lg-plus-only'>
        <SearchInput
          keyword={keyword}
          onClickInput={onClickInput}
          onChangeInput={onChangeInput}
          onBlurInput={onBlurInput}
          onSubmitInput={onSubmitInput}
        />
        {historyVisable && (
          <SearchHistory
            keywords={keywords}
            onDeleteKeyword={onDeleteKeyword}
            onDeleteAllKeyword={onDeleteAllKeyword}
          />
        )}
      </StyledHeaderSearchGroup>
    </ShowSmallDesktopPlus>
  );
}

const StyledHeaderSearchGroup = styled.div`
  position: relative;
`;

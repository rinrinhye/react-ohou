import styled from 'styled-components';
import ImageCloseWhite from 'assets/ico_close_white.svg';
import ImageSearchGray from 'assets/ico_search_gray.svg';
import { XL } from 'styles/mixins/styled-responsive';

export default function SearchInput({
  keyword,
  onClickInput,
  onChangeInput,
  onBlurInput,
  onSubmitInput,
}) {
  return (
    <Form onSubmit={onSubmitInput}>
      <StyledInput
        className='header__search-group__input'
        type='text'
        placeholder='통합검색'
        value={keyword}
        onClick={onClickInput}
        onChange={onChangeInput}
        onBlur={onBlurInput}
      />
      <InputDeleteButton className='header__search-group__input-delete-button'>
        <img
          src={ImageCloseWhite}
          alt=''
        />
      </InputDeleteButton>
    </Form>
  );
}

const Form = styled.form`
  position: relative;
  margin-right: 20px;

  &::after {
    width: 28px;
    height: 28px;
    top: 6px;
    left: 7px;
    background: url(${ImageSearchGray}) no-repeat;
    background-size: contain;
    content: '';
    display: block;
    position: absolute;
  }
`;

const StyledInput = styled.input`
  width: 196px;
  height: 40px;
  padding: 0 40px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;

  &::placeholder {
    color: #bdbdbd;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.background1};
  }

  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.ohouBlue};
  }

  ${XL`
   width: 296px;

  `}
`;

const InputDeleteButton = styled.button`
  position: absolute;
  top: 10px;
  right: 16px;
  display: none;
  width: 20px;
  height: 20px;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  background: ${({ theme }) => theme.colors.fontGray2};
  border-radius: 50%;

  & img {
    width: 14px;
    height: 14px;
    margin-top: 2px;
  }
`;

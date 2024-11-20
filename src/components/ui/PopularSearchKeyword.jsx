import React from 'react';
import styled from 'styled-components';
import { textStyle } from 'styles/mixins/text-style';
import { Down, New, Up } from 'styles/modules/icons';

export default function PopularSearchKeyword({ item }) {
  const { rank, keyword, status } = item;

  return (
    <StyledA href=''>
      <Rank>{rank}</Rank>
      {status === 'up' ? <Up /> : status === 'down' ? <Down /> : <New />}
      <Keyword>{keyword}</Keyword>
    </StyledA>
  );
}

const StyledA = styled.a`
  display: flex;
  padding: 2px 0;
  margin: 8px 12px;
  white-space: nowrap;
`;

const Rank = styled.span`
  ${textStyle(16)}
  flex-basis: 20px;
  flex-shrink: 0;
  font-weight: 700;
  text-align: center;
`;

const Keyword = styled.span`
  ${textStyle(16)}
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

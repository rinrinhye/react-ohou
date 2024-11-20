import styled, { css } from 'styled-components';
import { textStyle } from '../mixins/text-style';

const badgeStyles = css`
  ${textStyle(11)}
  display: inline-block;
  padding: 0 4px;
  font-weight: 700;
  line-height: 20px;
  border-radius: 4px;
`;

export const StyledBadgeFreeShipping = styled.span`
  ${badgeStyles}

  color: ${({ theme }) => theme.colors.fontGray3};
  background: ${({ theme }) => theme.colors.background4};
`;

export const StyledBadgeSpecialDeal = styled.span`
  ${badgeStyles}
  margin-left: 4px;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.ohouRed};
`;

export const StyledBadgeTime = styled.span`
  ${badgeStyles}
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.ohouRed};
`;

export const StyledBadgePaymentDiscount = styled.span`
  ${badgeStyles}
  margin-top: 6px;
  border: 1px solid ${({ theme }) => theme.colors.border};

  img {
    width: 10px;
    height: 10px;
  }
`;

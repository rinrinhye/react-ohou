import styled from 'styled-components';
import IcoStar from 'assets/ico_star_blue.svg';
import { textStyle } from 'styles/mixins/text-style';

export default function ReviewGroup({ rating, reviewCount }) {
  return (
    <StyledReviewGroup className='product__review-group'>
      <StarIcon
        src={IcoStar}
        alt=''
      />
      <Rating>{rating}</Rating>
      <Count>리뷰 {reviewCount.toLocaleString()}</Count>
    </StyledReviewGroup>
  );
}

const StyledReviewGroup = styled.div`
  display: flex;
`;

const StarIcon = styled.img`
  display: block;
  width: 15px;
  height: 15px;
`;

const Rating = styled.span`
  ${textStyle(12)}
  margin-left: 4px;
  font-weight: 700;
`;

const Count = styled.span`
  ${textStyle(12)}
  margin-left: 4px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.fontGray4};
`;

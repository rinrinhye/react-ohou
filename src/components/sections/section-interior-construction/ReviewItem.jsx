import styled from 'styled-components';
import { textStyle } from 'styles/mixins/text-style';
import { lineClamp } from 'styles/mixins/line-clamp';
import { MD } from 'styles/mixins/styled-responsive';
import LinkOverlay from 'components/ui/LinkOverlay';
import PhotoCard from 'components/ui/PhotoCard';

export default function ReviewItem({ item, cssName }) {
  return (
    <StyledReviewItem className='interior-construction-review__item'>
      <LinkOverlay ariaLabel={`${item.title} 후기`} />
      <PhotoCard
        item={item}
        cssName={cssName}
      />
      <div className='review__text'>
        <Title>{item.title}</Title>
        <DESC>{item.desc}</DESC>
      </div>
    </StyledReviewItem>
  );
}

const StyledReviewItem = styled.div`
  position: relative;
  display: flex;
  gap: 12px;

  ${MD`
      flex-basis: 30%;
      flex-direction: column;
      flex-grow: 1;
      gap: 10px;
  `}
`;

const Title = styled.strong`
  ${textStyle(14)}
  font-weight: 700;

  ${MD`
     ${textStyle(16)}

  `}
`;

const DESC = styled.p`
  ${textStyle(14)}
  ${lineClamp(4)}
  margin-top: 2px;
  line-height: 20px;
  word-break: keep-all;

  ${MD`
      ${textStyle(16)}
      margin-top: 4px;
     -webkit-line-clamp: 3;


  `}
`;

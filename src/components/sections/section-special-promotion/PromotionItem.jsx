import styled from 'styled-components';
import LinkOverlay from 'components/ui/LinkOverlay';
import PhotoCard from 'components/ui/PhotoCard';
import { textStyle } from 'styles/mixins/text-style';
import { MD } from 'styles/mixins/styled-responsive';

export default function PromotionItem({ item, cssName }) {
  return (
    <StyledPromotionItem>
      <LinkOverlay ariaLabel={item.title} />
      <PhotoCard
        item={item}
        cssName={cssName}
      />
      <div>
        <SubTitle>{item.subTitle}</SubTitle>
        <Title>{item.title}</Title>
      </div>
    </StyledPromotionItem>
  );
}

const StyledPromotionItem = styled.div`
  position: relative;
  display: flex;
  min-width: 0;
  gap: 12px;

  ${MD`
      flex: 0 0 calc(25% - 16px);
      flex-direction: column;
  `}
`;

const Title = styled.strong`
  ${textStyle(16)}
  display: block;
  margin-top: 6px;
  font-weight: 700;
  word-break: keep-all;
`;

const SubTitle = styled.p`
  ${textStyle(14)}
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

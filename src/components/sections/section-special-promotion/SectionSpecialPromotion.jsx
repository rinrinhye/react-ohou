import image_refurb from 'assets/special_promotion_refurbished_market.png';
import image_omart from 'assets/special_promotion_ohmart.jpeg';
import image_direct_shipping from 'assets/special_promotion_direct_shipping.jpeg';
import SectionTitle from 'components/ui/SectionTitle';
import SectionWrap from 'components/sections/SectionWrap';
import SectionMoreLink from 'components/ui/SectionMoreLink';
import PromotionItem from './PromotionItem';
import { MD } from 'styles/mixins/styled-responsive';
import styled from 'styled-components';
import LinkOverlay from 'components/ui/LinkOverlay';
import ContentViewMore from 'components/ui/ContentViewMore';
import { HideMobile } from 'styles/react-responsive';

export default function SectionSpecialPromotion() {
  const lists = [
    {
      title: '빠른 품절! 리퍼마켓 ~88%',
      subTitle: '전시, 반품, 스크래치 득템의 기회!',
      imageSrc: image_refurb,
    },
    {
      title: '매일 새로운 장보기 핫딜! 오마트',
      subTitle: '전상품 무료배송',
      imageSrc: image_omart,
    },
    {
      title: '오늘의집 배송 꿀조합 가구 추천',
      subTitle: '배송 걱정없이 원하는 날 한번에 설치해요!',
      imageSrc: image_direct_shipping,
    },
  ];

  return (
    <section>
      <SectionWrap>
        <SectionTitle title={'오늘의 기획전'} />
        <div>
          <PromotionGroup>
            {lists.map((item) => {
              return (
                <PromotionItem
                  item={item}
                  cssName={'special-promotion'}
                />
              );
            })}
            <HideMobile>
              <ElseItem>
                <LinkOverlay ariaLabel={'기획전 더보기'} />
                <ContentViewMore />
              </ElseItem>
            </HideMobile>
          </PromotionGroup>
          <SectionMoreLink text={'기획전 더보기'} />
        </div>
      </SectionWrap>
    </section>
  );
}

const PromotionGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  ${MD`
      flex-direction: row;
      gap: 16px;

  `}
`;

const ElseItem = styled.div`
  position: relative;
  width: 100%;
`;

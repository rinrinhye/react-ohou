import SlideArrowButtons from 'components/ui/SlideArrowButtons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Product from 'components/ui/products/Product';
import styled from 'styled-components';
import useSlideState from 'hooks/use-slide-state';
import LinkOverlay from 'components/ui/LinkOverlay';
import ContentViewMore from 'components/ui/ContentViewMore';

export default function TodayDealSlide({ data, cssName }) {
  const [slideState, handleSlideState] = useSlideState();

  return (
    <StyledTodayDealSlide className='today-deal-product-slide'>
      <SlideArrowButtons slideState={slideState} />
      <Swiper
        modules={[Navigation]}
        onProgress={(_, progress) => {
          handleSlideState(progress);
        }}
        breakpoints={{
          768: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 20,
            navigation: {
              nextEl: '.today-deal-product-slide .next-button',
              prevEl: '.today-deal-product-slide .prev-button',
            },
          },
        }}
      >
        {data.map((item) => {
          return (
            <SwiperSlide>
              <Product
                item={item}
                cssName={cssName}
              />
            </SwiperSlide>
          );
        })}
        <SwiperSlide>
          <LinkOverlay ariaLabel={'오늘의 딜 상품 더보기'} />
          <ContentViewMore />
        </SwiperSlide>
      </Swiper>
    </StyledTodayDealSlide>
  );
}

{
  /* <span
className='badge--time'
role='timer'
>
<!-- 07:04:21 남음 --> </span> */
}

const StyledTodayDealSlide = styled.div`
  position: relative;
`;

const StyledSwiper = styled(Swiper)``;

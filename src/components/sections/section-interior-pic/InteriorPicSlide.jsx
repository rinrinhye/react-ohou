import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';

import PhotoCard from 'components/ui/PhotoCard';
import SlideArrowButtons from 'components/ui/SlideArrowButtons';
import LinkOverlay from 'components/ui/LinkOverlay';
import styled from 'styled-components';
import ContentViewMore from 'components/ui/ContentViewMore';
import { MD } from 'styles/mixins/styled-responsive';
import useSlideState from 'hooks/use-slide-state';

export default function InteriorPicSlide({ data }) {
  const [slideState, handleSlideState] = useSlideState();

  return (
    <StyledInteriorPicSlide className='interior-pic-slide'>
      <SlideArrowButtons slideState={slideState} />
      <StyledSwiper
        modules={[Navigation]}
        slidesPerView={2.5}
        spaceBetween={12}
        onProgress={(_, progress) => {
          handleSlideState(progress);
        }}
        navigation={{
          nextEl: '.interior-pic-slide .next-button',
          prevEl: '.interior-pic-slide .prev-button ',
        }}
        breakpoints={{
          768: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          1024: {
            slidesPerView: 6,
            slidesPerGroup: 6,
          },
        }}
      >
        {data.map((item) => {
          return (
            <StyledSwiperSlide>
              <LinkOverlay />
              <PhotoCard
                item={item}
                userGroup={true}
                scrapButton={true}
                cssName={'interior-pic'}
              />
            </StyledSwiperSlide>
          );
        })}
        <StyledSwiperSlide>
          <LinkOverlay ariaLabel={'인테리어 추천 게시글 더보기'} />
          <ContentViewMore />
        </StyledSwiperSlide>
      </StyledSwiper>
    </StyledInteriorPicSlide>
  );
}

const StyledInteriorPicSlide = styled.div`
  position: relative;
`;

const StyledSwiper = styled(Swiper)`
  padding-left: 16px;
  margin: 0 -16px;

  ${MD`
  padding-left: 0;
  margin: 0 ;
  `}
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  position: relative;
`;

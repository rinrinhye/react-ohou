import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SlideArrowButtons from 'components/ui/SlideArrowButtons';
import styled from 'styled-components';
import { textStyle } from 'styles/mixins/text-style';
import { MD } from 'styles/mixins/styled-responsive';
import useSlideState from 'hooks/use-slide-state';

const images = require.context(
  '../../../../src/assets/category',
  false,
  /\.(png|jpe?g|svg)$/
);

export default function ProductCategoryShortcutSlide() {
  const titles = [
    '새학기 준비',
    '가구',
    '패브릭',
    '가전·디지털',
    '주방용품',
    '식품',
    '데코·식물',
    '조명',
    '수납·정리',
    '생활용품',
    '생필품',
    '유아·아동',
    '반려동물',
    '캠핑·레저',
    '공구·DIY',
    '인테리어시공',
    '렌탈·구독',
    '장보기',
    '혼수·신혼',
  ];

  const lists = titles.map((title) => {
    return { title };
  });

  images.keys().forEach((image, index) => {
    const src = image.replace('./', '');

    lists[index].src = require(`../../../../src/assets/category/${src}`);
  });

  const [slideState, handleSlideState] = useSlideState();

  return (
    <StyledSlide className='product-category-shortcut-slide'>
      <SlideArrowButtons slideState={slideState} />
      <StyledSwiper
        modules={[Navigation]}
        navigation={{
          nextEl: '.product-category-shortcut-slide .next-button',
          prevEl: '.product-category-shortcut-slide .prev-button',
        }}
        onProgress={(_, progress) => {
          handleSlideState(progress);
        }}
        slidesPerView={'auto'}
        spaceBetween={12}
        watchSlidesProgress={true}
        slidesPerGroupAuto={true}
      >
        {lists.map((item) => {
          return (
            <StyledSwiperSlide>
              <a
                href=''
                aria-label={item.title}
              >
                <img
                  src={item.src}
                  alt=''
                />
                <span>{item.title}</span>
              </a>
            </StyledSwiperSlide>
          );
        })}
      </StyledSwiper>
    </StyledSlide>
  );
}

const StyledSlide = styled.div`
  position: relative;
  margin-right: -16px;

  ${MD`
      margin-right: 0;
  `}
`;

const StyledSwiper = styled(Swiper)`
  scroll-snap-type: x mandatory;
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  width: 72px;

  a {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }

  img {
    display: block;
    flex-shrink: 0;
    width: 72px;
    height: 72px;
  }

  span {
    ${textStyle(14)}
    flex-shrink: 0;
    margin-top: 8px;
  }
`;

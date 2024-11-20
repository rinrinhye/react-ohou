import { Swiper, SwiperSlide } from 'swiper/react';
import SlideArrowButtons from 'components/ui/SlideArrowButtons';
import styled, { css } from 'styled-components';
import { MD } from 'styles/mixins/styled-responsive';
import { textStyle } from 'styles/mixins/text-style';
import useSlideState from 'hooks/use-slide-state';
import { Navigation } from 'swiper/modules';

export default function ProductCategoryControlSlide({
  category,
  categoryList,
  handleCategory,
}) {
  const [slideState, handleSlideState] = useSlideState();

  return (
    <StyledControlSlide className='product-category-control-slide'>
      <SlideArrowButtons slideState={slideState} />
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: '.product-category-control-slide .prev-button',
          nextEl: '.product-category-control-slide .next-button',
        }}
        onProgress={(_, progress) => {
          handleSlideState(progress);
        }}
        slidesPerView={'auto'}
        spaceBetween={8}
        watchSlidesProgress={true}
        slidesPerGroupAuto={true}
      >
        {categoryList.map((item) => {
          const value = Object.values(item)[0];
          return (
            <StyledSwiperSlide>
              <Button
                onClick={handleCategory}
                item={item}
                category={category}
              >
                {value}
              </Button>
            </StyledSwiperSlide>
          );
        })}
      </Swiper>
    </StyledControlSlide>
  );
}

const StyledControlSlide = styled.div`
  position: relative;
  margin-right: -16px;
  margin-bottom: 16px;

  ${MD`
    margin-right: 0;
  `}
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  width: fit-content;
  white-space: nowrap;
`;

const Button = styled.button`
  ${textStyle(14)}
  display: inline-block;
  height: 32px;
  padding: 0 12px;
  line-height: 32px;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.background1};
  border-radius: 16px;

  ${({ category, item }) => {
    if (category === Object.keys(item)[0]) {
      return css`
        color: ${({ theme }) => theme.colors.white};
        background: ${({ theme }) => theme.colors.ohouBlue};
      `;
    }
  }}
`;

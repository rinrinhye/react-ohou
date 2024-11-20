import { useState } from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import SlideArrowButtons from 'components/ui/SlideArrowButtons';
import styled from 'styled-components';
import { textStyle } from 'styles/mixins/text-style';
import { MD } from 'styles/mixins/styled-responsive';

const slides = [
  {
    ariaLable: '린나이 Big Sale 위크',
  },
  {
    ariaLable: '인기 리빙템 기획전',
  },
  {
    ariaLable: '인기 리빙템 기획전',
  },
  {
    ariaLable: '기간 한정 핫딜 전상품 오마트 무료배송 장보기',
  },
  {
    ariaLable: '크리에이터 활동·혜택 클릭 한 번으로 시작해보세요',
  },
  {
    ariaLable: '오늘의 집 혜택 첫구매/웰컴백 최대 2만원 할인',
  },
  {
    ariaLable: '#아르떼미데이렇게써요 예쁜 집에 꼭 있는 이 조명 선물 드려요',
  },
  {
    ariaLable: '우리집 반려동물 본격 자랑대회',
  },
  {
    ariaLable: '원룸 공간 활용이 어렵다면 주목',
  },
  {
    ariaLable: '오늘의 집 리서치 참여하고 최대 5만 포인트 받아가세요',
  },
  {
    ariaLable: '평소처럼 기록만 했을 뿐인데 오늘의집으로 100만원을?',
  },
  {
    ariaLable: '출첵하면 매일 포인트 증정! 행운출첵 최대 2만원',
  },
  {
    ariaLable: '누구나 100% 증정! 인기 식물 공짜로 득템하기',
  },
  {
    ariaLable: '최대 30만 포인트 증정! 종합 인테리어 친구 추천 이벤트',
  },
  {
    ariaLable: '이사도 오늘의집 30초 무료견적 신청',
  },
  {
    ariaLable: '우리집, 안심하고 시공하도록 오늘의집 시공책임보장',
  },
  {
    ariaLable: '결제 전 확인 필수! 8월 결제 혜택 모아보기',
  },
  {
    ariaLable: '구매할 때마다 쌓이는 포인트 혜택 받아가세요',
  },
];

const images = require.context(
  '../../../../src/assets/banner-slide',
  false,
  /\.(png|jpe?g|svg)$/
);

images.keys().forEach((image) => {
  const imageIndex = image.replace(/[^0-9]/g, '');
  const src = image.replace('./', '');

  if (image.includes('mo')) {
    slides[
      imageIndex - 1
    ].moSrc = require(`../../../../src/assets/banner-slide/${src}`);
  } else {
    slides[
      imageIndex - 1
    ].src = require(`../../../../src/assets/banner-slide/${src}`);
  }
});

export default function BannerSlide() {
  const [currentIndex, setCurrentIndex] = useState(1);

  function setSlideIndex(swiper) {
    setCurrentIndex(swiper.realIndex + 1);
  }

  return (
    <StyledBannerSlide className='banner-slide'>
      <SlideArrowButtons />
      <StyledSwiper
        modules={[Navigation, Autoplay]}
        autoplay={{
          pauseOnMouseEnter: true,
        }}
        navigation={{
          nextEl: '.banner-slide .next-button',
          prevEl: '.banner-slide .prev-button',
        }}
        loop={true}
        onRealIndexChange={setSlideIndex}
      >
        {slides.map((slide) => {
          return (
            <StyledSwiperSlide>
              <a
                href=''
                aria-label={slide.ariaLable}
              >
                <img
                  src={slide.src}
                  alt=''
                />
              </a>
            </StyledSwiperSlide>
          );
        })}
      </StyledSwiper>
      <NumberGroup>
        <span>{currentIndex}</span>/<span>{slides.length}</span>
      </NumberGroup>
    </StyledBannerSlide>
  );
}

const StyledBannerSlide = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 4px;

  ${MD`
    overflow: visible;
  `}
`;

const StyledSwiper = styled(Swiper)`
  border-radius: 4px;
  overflow: hidden;
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  a {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    overflow: hidden;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const NumberGroup = styled.a`
  ${textStyle(12)}
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 1;
  padding: 2px 10px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.background5};
  border-top-left-radius: 8px;

  span {
    color: inherit;
  }

  ${MD`
      ${textStyle(14)}

      right: 12px;
      bottom: 12px;
      padding: 4px 10px 4px 12px;
      letter-spacing: -1px;
      border-radius: 20px;

      &::after {
        font-size: 20px;
        line-height: 16px;
        content: '+';
      }

  `}
`;

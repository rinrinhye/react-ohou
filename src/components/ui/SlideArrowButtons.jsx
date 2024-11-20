import styled, { css } from 'styled-components';
import { MD } from 'styles/mixins/styled-responsive';

export default function SlideArrowButtons({ slideState }) {
  return (
    <>
      <Prev
        className='prev-button'
        slideState={slideState}
      ></Prev>
      <Next
        className='next-button'
        slideState={slideState}
      ></Next>
    </>
  );
}

const Button = styled.button`
  position: absolute;
  top: 50%;
  z-index: ${({ theme }) => theme.zIndex.slideArrowButton};
  width: 48px;
  height: 48px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  transform: translateY(-50%);
  box-shadow: ${({ theme }) => theme.boxShadow};
  visibility: hidden;

  &::after {
    position: absolute;
    top: 50%;
    display: block;
    width: 12px;
    height: 12px;
    border-top: 2px solid ${({ theme }) => theme.colors.fontGray1};
    border-right: 2px solid ${({ theme }) => theme.colors.fontGray1};
    content: '';
    visibility: hidden;
  }
`;

const Prev = styled(Button)`
  left: -24px;

  &::after {
    left: 38%;
    transform: translateY(-50%) rotate(-135deg);
  }

  ${({ slideState }) => {
    if (slideState === 'start') {
      return css`
        ${MD`
         visibility: hidden;
      `}
      `;
    } else {
      return css`
        ${MD`
         visibility: visible;

         &::after{ 
         visibility: visible;
         }
      `}
      `;
    }
  }}
`;

const Next = styled(Button)`
  right: -24px;

  &::after {
    left: 30%;
    transform: translateY(-50%) rotate(45deg);
  }

  ${({ slideState }) => {
    if (slideState === 'end') {
      return css`
        ${MD`
         visibility: hidden;
      `}
      `;
    } else {
      return css`
        ${MD`
         visibility: visible;

          &::after{ 
            visibility: visible;
          }
      `}
      `;
    }
  }}
`;

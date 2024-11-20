import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { HideMobile } from 'styles/react-responsive';
import { textStyle } from 'styles/mixins/text-style';
import { MD } from 'styles/mixins/styled-responsive';

export default function SectionTitle({ title, subTitle = '' }) {
  return (
    <TitleGroup
      as={Link}
      to=''
    >
      <Title>{title}</Title>
      {subTitle && <SubTitle>{subTitle}</SubTitle>}

      <MoreGroup>
        <HideMobile>
          <MoreText>더보기</MoreText>
        </HideMobile>
      </MoreGroup>
    </TitleGroup>
  );
}

const TitleGroup = styled.a`
  position: relative;
  display: block;
  padding: 20px 0;
`;

const Title = styled.h2`
  ${textStyle(20)}
  display: inline-block;
  font-weight: 700;

  &:hover {
    opacity: 0.5;
  }
`;

const SubTitle = styled.p`
  ${textStyle(14)}
`;

const MoreGroup = styled.span`
  position: absolute;
  top: 20px;
  right: 2px;
  width: 24px;
  height: 24px;

  &::after {
    position: absolute;
    top: 0;
    left: 50%;
    display: block;
    width: 12px;
    height: 12px;
    border-right: 2px solid ${({ theme }) => theme.colors.fontBlack};
    border-bottom: 2px solid ${({ theme }) => theme.colors.fontBlack};
    content: '';
    transform: rotate(-45deg) translateX(-50%);
  }

  ${MD`
      width: auto;

      &:hover {
        opacity: 0.5;
      }

      &::after {
        display: none;
      }

  `}
`;
const MoreText = styled.span`
  ${textStyle(16)}
  color:${({ theme }) => theme.colors.ohouBlue};
  font-weight: 700;
`;

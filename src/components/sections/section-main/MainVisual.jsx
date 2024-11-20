import styled from 'styled-components';

import LinkOverlay from 'components/ui/LinkOverlay';
import ImageVisaul from 'assets/main_visual.jpg';
import UserGroup from 'components/ui/UserGroup';

import ImageUser from 'assets/main_visual_avatar.jpeg';

import { textStyle } from 'styles/mixins/text-style';
import { LG } from 'styles/mixins/styled-responsive';

export default function MainVisual() {
  return (
    <Visual>
      <LinkOverlay src={''} />
      <VisualImage
        src={ImageVisaul}
        alt=''
      />
      <InfoWrap>
        <Title>적은 시공으로 가능해요! 모던하고 효율적인 신혼집💕</Title>
        <UserGroup
          name={'home_laforet'}
          src={ImageUser}
        />
      </InfoWrap>
    </Visual>
  );
}
const Visual = styled.div`
  position: relative;
  height: 0;
  padding-bottom: 63%;
  overflow: hidden;
  border-radius: 4px;

  .avatar {
    width: 20px;
    height: 20px;

    ${LG`
      width: 24px;
      height: 24px;
      `}
  }
`;

const VisualImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const InfoWrap = styled.div`
  position: absolute;
  bottom: 0;
  z-index: 100;
  width: 100%;
  padding: 30px;
`;

const Title = styled.div`
  ${textStyle(24)}

  display: block;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  word-break: keep-all;

  ${LG`
     ${textStyle(32)}
  `}
`;

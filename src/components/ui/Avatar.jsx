import styled, { css } from 'styled-components';
import IcoAvatarBase from 'assets/ico_avatar.png';

export default function Avatar({ src }) {
  return (
    <StyledAvatar className='avatar'>
      <img
        src={src === '' ? IcoAvatarBase : src}
        alt=''
      />
    </StyledAvatar>
  );
}

export const StyledAvatar = styled.div`
  display: block;
  overflow: hidden;
  border-radius: 50%;

  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

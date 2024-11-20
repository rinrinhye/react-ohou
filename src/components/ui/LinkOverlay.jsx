import styled from 'styled-components';

export default function LinkOverlay({ href = '', ariaLabel }) {
  return (
    <Overlay
      href={href}
      aria-label={ariaLabel}
    ></Overlay>
  );
}

const Overlay = styled.a`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: ${({ theme }) => theme.zIndex.linkOverlay};
`;

import { useMediaQuery } from 'react-responsive';

export function HideMobile({ children }) {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? null : children;
}

export function Mobile({ children }) {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
}

export const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  return isTablet ? children : null;
};

export const SmallDesktop = ({ children }) => {
  const isSmallDesktop = useMediaQuery({ minWidth: 1024, maxWidth: 1255 });
  return isSmallDesktop ? children : null;
};

export const LargeDesktop = ({ children }) => {
  const isLargeDesktop = useMediaQuery({ minWidth: 1256 });
  return isLargeDesktop ? children : null;
};

export const HideSmallDesktopPlus = ({ children }) => {
  const isSmallDesktopPlus = useMediaQuery({ minWidth: 1024 });
  return isSmallDesktopPlus ? null : children;
};

export const ShowSmallDesktopPlus = ({ children }) => {
  const isSmallDesktopPlus = useMediaQuery({ minWidth: 1024 });
  return isSmallDesktopPlus ? children : null;
};

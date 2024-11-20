import { useState } from 'react';

export default function useSlideState() {
  const [slideState, setSlideState] = useState();

  const handleSlideState = (progress) => {
    if (progress === 0) {
      setSlideState('start');
    } else if (progress > 0 && progress < 1) {
      setSlideState('middle');
    } else if (progress === 1) {
      setSlideState('end');
    }
  };

  return [slideState, handleSlideState];
}

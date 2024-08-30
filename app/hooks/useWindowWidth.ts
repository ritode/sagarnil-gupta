import { useState, useEffect } from 'react';
import { debounce } from 'lodash';

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = debounce(() => setWindowWidth(window.innerWidth), 100);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowWidth;
};
export default useWindowWidth;

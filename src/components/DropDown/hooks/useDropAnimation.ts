import { useEffect } from 'react';
import type { RefObject } from 'react';

function useDropAnimation(ref: RefObject<HTMLElement>) {
  useEffect(() => {
    const element = ref.current;
    if (element) {
    }
  }, []);
}

export default useDropAnimation;

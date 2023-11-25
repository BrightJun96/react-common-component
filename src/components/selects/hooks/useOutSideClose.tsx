import React, { useEffect } from 'react';

export default function useOutSideClose(ref: React.RefObject<HTMLDivElement>, callback: (event: MouseEvent) => void) {
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback(e);
        console.log('바깥쪽');
      }
    }
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [ref, callback]);
}

import { useState } from 'react';

export const useHover = () => {
  const [isHover, setIsHover] = useState<boolean>(false);

  const handleMouseOver = () => {
    setIsHover(true);
  };

  const handleMouseOut = () => {
    setIsHover(false);
  };
  return { isHover, handleMouseOut, handleMouseOver };
};

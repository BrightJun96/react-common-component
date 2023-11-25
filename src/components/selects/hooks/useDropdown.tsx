import { useState, useRef } from 'react';
import useOutSideClose from './useOutSideClose';

export default function useDropdown() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const outSideRef = useRef(null);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  useOutSideClose(outSideRef, close);
  return { isOpen, handleToggle, open, close, ref: outSideRef };
}

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

interface MenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

function Hamburger({ isOpen, toggleMenu }: MenuProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      toggleMenu();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    const handleEscape = (e: any) => {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        console.log('is Open');
        toggleMenu();
      }
    };
    
    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);
  
  // useEffect(() => {
  //   const handleBlur = () => {
  //     console.log('blured');
  //   };
  //   window.addEventListener('blur', handleBlur);
  //   return () => {
  //     window.removeEventListener('blur', handleBlur);
  //   };
  // }, [isOpen]);


  return (
    <button
      type='button'
      aria-label={`${isOpen ? 'Hide' : 'Show'} navigation menu`}
      aria-expanded={isOpen}
      aria-controls='navbar-menu'
      onClick={toggleMenu}
      className='md:hidden h-fit max-md:flex flex-col gap-1.5 items-end z-[100] outline-2 focus-visible:outline-dashed outline-offset-2'
    >
      <span
        className={`top-bar h-0.5 w-7 bg-accent transition duration-500 ${isOpen && 'translate-y-1 rotate-45 bg-main'}`}
        aria-hidden='true'
      ></span>
      <span
        className={`mid-bar h-0.5 w-6 bg-accent transition duration-500 ${isOpen && 'hidden'}`}
        aria-hidden='true'
      ></span>
      <span
        className={`bottom-bar h-0.5 w-7 bg-accent transition duration-500 ${isOpen && '-translate-y-1 -rotate-45 bg-main'}`}
        aria-hidden='true'
      ></span>
    </button>
  );
}

export default Hamburger;

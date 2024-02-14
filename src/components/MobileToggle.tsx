import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

function MobileToggle({ isOpen, toggleMenu }: MenuProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      toggleMenu();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // useEffect(() => {
  //   if (isOpen) {
  //     document.body.classList.add('no-scroll')
  //   } else {
  //     document.body.classList.remove('no-scroll')
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [isOpen]);

  return (
    <button
      type='button'
      aria-expanded={isOpen}
      aria-controls='navbar-menu'
      onClick={toggleMenu}
      className='md:hidden h-fit max-md:flex flex-col gap-1 items-end z-50 outline-2 focus-visible:outline-dashed outline-offset-2'
    >
      <span className='sr-only'>Toggle navigation menu</span>
      <span
        className='top-bar h-0.5 w-7 bg-accent transition duration-500'
        aria-hidden='true'
      ></span>
      <span
        className='mid-bar h-0.5 w-6 bg-accent transition duration-500'
        aria-hidden='true'
      ></span>
      <span
        className='bottom-bar h-0.5 w-5 bg-accent transition duration-500'
        aria-hidden='true'
      ></span>
    </button>
  );
}

export default MobileToggle;

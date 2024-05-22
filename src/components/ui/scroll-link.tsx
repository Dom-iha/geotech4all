import Link from 'next/link';
import { DoubleArrowDownIcon } from '@radix-ui/react-icons';

function ScrollLink({ target }: { target: string }) {
  return (
    <Link
      href={`#${target}`}
      className='w-16 h-16 md:h-20 md:w-20 lg:w-24 lg:h-24 grid place-items-center border-accent border-dashed border rounded-full'
    >
      <DoubleArrowDownIcon className='down-arrow' />
    </Link>
  );
}

export default ScrollLink;

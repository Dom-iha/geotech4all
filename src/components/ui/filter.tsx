'use client';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { CategoryResponseType } from '@/types';
import { toast } from 'sonner';
import { SearchIcon, X } from 'lucide-react';

function Filter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [expanded, setExpanded] = useState(false);
  const [categories, setCategories] = useState<CategoryResponseType[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>();
  const [activeCategory, setActiveCategory] = useState<string | null>(
    searchParams.get('category')
  );

  const filterCategories = (categoryName: string) => {
    setActiveCategory(categoryName);
    setExpanded(false);
    const params = new URLSearchParams(searchParams.toString());
    params.set('category', categoryName);

    router.push(pathname + '?' + params.toString(), { scroll: false });
  };

  const resetFilter = () => {
    setActiveCategory(null);
    setExpanded(false);
    const params = new URLSearchParams(searchParams.toString());
    params.delete('category');

    router.push(pathname + '?' + params.toString(), { scroll: false });
    // router.push(pathname, { scroll: false });
  }

  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (e.target.closest('.select') === null) {
        setExpanded(false);
      }
    };
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/categories`
        );
        if (!response.ok) {
          return toast.error('Something went wrong');
        }
        const data: CategoryResponseType[] = await response.json();
        setCategories(data);
      } catch (error) {
        console.log(error);
        return toast.error('Something went wrong');
      }
    };

    getCategories();
  }, []);

  return (
    <div className='flex gap-4 justify-between flex-wrap'>
      <label
        htmlFor='search'
        className='h-fit max-w-[500px] flex items-center py-4 px-6 rounded-md w-full border border-input p-3 placeholder:text-sm placeholder:font-thin placeholder:text-accent/70 focus-within:border-transparent focus-within:outline-focus focus-within:outline-dashed focus-within:outline-1'
      >
        <SearchIcon aria-hidden='true' />
        <input
          id='search'
          type='text'
          autoComplete='off'
          value={searchQuery}
          placeholder='Search for an article...'
          onChange={(e) => {
            const value = e.target.value;
            setSearchQuery(value);
          }}
          className='w-full h-fit bg-transparent placeholder:text-sm placeholder:tracking-widest px-4 border-none outline-none transition duration-300'
        />
        {searchQuery && (
          <button
            type='button'
            title='clear input'
            onClick={() => setSearchQuery('')}
          >
            <X aria-hidden='true' />
          </button>
        )}
      </label>
      <div className='select relative w-fit'>
        <button
          type='button'
          className='whitespace-nowrap w-52 justify-between flex items-center h-fit py-4 px-6 border border-input rounded-md focus-visible:border-transparent focus-visible:outline-focus focus-visible:outline-dashed focus-visible:outline-1 transition duration-300'
          onClick={() => setExpanded(!expanded)}
        >
          <span>{activeCategory ? activeCategory : 'Filter by category'}</span>
          <span
            className={`transition duration-300 ${
              expanded && 'rotate-[180deg]'
            }`}
          >
            <ChevronDownIcon aria-hidden='true' />
          </span>
        </button>
        <ul
          className={`overflow-hidden px-2 bg-main border border-input absolute z-10 w-full right-0 top-[4.2rem] flex flex-col gap-2 shadow-sm rounded-md  max-h-[20rem] py-2 transition-all ${
            expanded
              ? 'visible opacity-100 translate-y-0'
              : '-translate-y-3 invisible opacity-20'
          }`}
        >
          <li key={nanoid()}>
            <button
              type='button'
              className='w-full capitalize text-left rounded-md py-1 px-4 hover:bg-hover outline-focus outline-offset-1 outline-1 focus-visible:outline-dashed transition duration-300'
              tabIndex={!expanded ? -1 : undefined}
              onClick={resetFilter}
            >
              all
            </button>
          </li>
          {categories.map((category) => (
            <li key={nanoid()}>
              <button
                type='button'
                className='w-full capitalize text-left rounded-md py-1 px-4 hover:bg-hover outline-focus outline-offset-1 outline-1 focus-visible:outline-dashed transition duration-300'
                tabIndex={!expanded ? -1 : undefined}
                onClick={() => filterCategories(category.name)}
              >
                {category.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Filter;

'use client';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { Cancel, Search } from '../Icons';
import data from '@/data/data.json';
import { ChevronDownIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { usePathname, useSearchParams } from 'next/navigation';
import { CategoryResponseType } from '@/types';
import { toast } from 'sonner';

function Filter() {
  const [expanded, setExpanded] = useState(false);
  const [categories, setCategories] = useState<CategoryResponseType[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>();
  const [activeCategory, setActiveCategory] = useState<string>();


  const clearInput = () => {
    setSearchQuery('');
  };

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
    <div className='flex flex-col gap-6 items-center'>
      <div className='flex flex-col gap-6 md:gap-3 lg:flex-row md:justify-center'>
        <label
          htmlFor='search'
          className='md:w-[470px] h-fit flex items-center py-4 px-6 rounded-md w-full border border-input p-3 placeholder:text-sm placeholder:font-thin placeholder:text-accent/70 focus-within:border-transparent focus-within:outline-focus focus-within:outline-dashed focus-within:outline-1'
        >
          <Search aria-hidden='true' />
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
              onClick={() => clearInput()}
            >
              <Cancel aria-hidden='true' />
            </button>
          )}
        </label>
        <div className='select relative w-fit'>
          <button
            type='button'
            className='whitespace-nowrap w-52 justify-between flex items-center h-fit py-4 px-6 border rounded-md focus-visible:border-transparent focus-visible:outline-focus focus-visible:outline-dashed focus-visible:outline-1 transition duration-300'
            onClick={() => setExpanded(!expanded)}
          >
            <span>
              {activeCategory ? activeCategory : 'Filter by category'}
            </span>
            <span
              className={`transition duration-300 ${
                expanded && 'rotate-[180deg]'
              }`}
            >
              <ChevronDownIcon aria-hidden='true' />
            </span>
          </button>
          <ul
            className={`px-2 bg-main absolute z-10 transition-all duration-200 w-full right-0 top-[3.8rem] flex flex-col gap-2 shadow-md rounded-md ${
              expanded
                ? 'max-h-[20rem] py-2 opacity-100'
                : 'max-h-0 py-0 opacity-0'
            }`}
          >
            {categories.map((category) => (
              <li key={nanoid()}>
                <button
                  type='button'
                  className='w-full capitalize text-left rounded-md py-1 px-4 hover:bg-hover outline-focus outline-offset-1 outline-1 focus-visible:outline-dashed transition duration-300'
                  tabIndex={!expanded ? -1 : undefined}
                  onClick={() => {
                    setActiveCategory(category.name);
                    setExpanded(false);
                  }}
                >
                  {category.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Filter;

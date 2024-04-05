'use client';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { Cancel, Search } from '../Icons';
import data from '@/data/data.json';
import { ChevronDownIcon, ChevronRightIcon } from '@radix-ui/react-icons';

function Filter({}: //   setFilterByCategory,
//   activeCategory,
//   setSearchQuery,
//   searchQuery,
{
  //   setFilterByCategory: Dispatch<SetStateAction<string>>;
  //   activeCategory: string;
  //   setSearchQuery: Dispatch<SetStateAction<string>>;
  //   searchQuery: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const [categories, setCategories] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>();
  const [activeCategory, setActiveCategory] = useState<string>();

  const allCategories = data.articles.map((article) => {
    if (!categories.includes(article.category)) {
      return setCategories([...categories, article.category]);
    }
  });

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

  return (
    <div className='flex flex-col gap-6 md:gap-3 lg:flex-row md:justify-center'>
      <label
        htmlFor='search'
        className='md:w-[470px] bg-alt h-fit flex items-center py-4 px-6 rounded-md shadow-md outline-accent outline-offset-1 outline-2 focus-within:outline-dashed transition duration-300'
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
          className='whitespace-nowrap bg-alt w-52 justify-between flex items-center h-fit py-4 px-6 shadow-md rounded-md outline-accent outline-offset-1 outline-2 focus-visible:outline-dashed transition duration-300 stroke-current'
          onClick={() => setExpanded(!expanded)}
        >
          <span>{activeCategory ? activeCategory : 'Filter by category'}</span>
          <span
            className={`transition duration-300 ${
              expanded && 'rotate-[180deg]'
            }`}
          >
            <ChevronDownIcon aria-hidden='true'/>
          </span>
        </button>
        <ul
          className={`px-2 bg-alt absolute z-10 transition-all duration-300 w-full right-0 top-[3.8rem] flex flex-col gap-2 shadow-md rounded-md ${
            expanded
              ? 'max-h-[20rem]  py-2 opacity-100'
              : 'max-h-0 py-0 opacity-0'
          }`}
        >
          {categories.map((category) => (
            <li key={nanoid()}>
              <button
                type='button'
                className='w-full text-left px-4 outline-accent outline-offset-1 outline-1 focus-visible:outline-dashed transition duration-300'
                tabIndex={!expanded ? -1 : undefined}
                onClick={() => {
                  setActiveCategory(category);
                  setExpanded(false);
                }}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Filter;

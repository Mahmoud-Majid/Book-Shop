import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { fetchBook } from '../utils/fetchApi';
import { ProductProp } from '../utils/types';

export default function ProductDetails() {
  const [book, setBook] = useState<ProductProp>();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    fetchBook(id!).then((book) => setBook(book));
  }, [id]);

  return (
    <div className='bg-white'>
      <div className='pt-6'>
        {/* Image gallery */}
        <div className='mt-6 max-w-xl mx-auto sm:px-6 lg:max-w-lg '>
          <div className='hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block'>
            <img
              src={book?.formats['image/jpeg']}
              className='w-full h-full object-center object-cover'
            />
          </div>
        </div>
        {/* Product info */}
        <div className='max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-2 lg:grid-rows-[auto,auto] lg:gap-x-8'>
          <div className='lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8'>
            <h1 className='text-2xl font-bold tracking-tight text-gray-900 sm:tracking-tight sm:text-3xl'>
              {book?.title}
            </h1>
          </div>

          {/* Options */}

          <div className='py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8'>
            {/* Description and details */}
            <div>
              <h3 className='text-sm font-medium text-gray-900'>Keywords</h3>

              <div className='space-y-6'>
                <p className='text-base text-gray-900'>{book?.subjects}</p>
              </div>
            </div>

            <div className='mt-10'>
              <h3 className='text-sm font-medium text-gray-900'>Categories</h3>

              <div className='mt-4'>
                <ul role='list' className='pl-4 list-disc text-sm space-y-2'>
                  {book?.bookshelves.map((type) => (
                    <li key={type} className='text-gray-400'>
                      <span className='text-gray-600'>{type}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className='mt-10'>
              <h2 className='text-sm font-medium text-gray-900'>
                Author Details
              </h2>

              <div className='mt-4 space-y-6'>
                {book?.authors.map((author) => (
                  <>
                    <p className='text-sm text-gray-600'>Name: {author.name}</p>
                    <p className='text-sm text-gray-600'>
                      Date of birth: {author.birth_year}
                    </p>
                    <p className='text-sm text-gray-600'>
                      Date of death: {author.death_year}
                    </p>
                  </>
                ))}
              </div>
            </div>
          </div>
          <button
            type='button'
            className='text-white justify-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            <svg
              aria-hidden='true'
              className='mr-2 -ml-1 w-5 h-5'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z'></path>
            </svg>
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
}

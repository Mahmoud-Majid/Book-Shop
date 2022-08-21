import Product from './Product';
import { ProductProp } from '../utils/types';
import { fetchAllBooks } from '../utils/fetchApi';
import { useEffect, useState } from 'react';

export default function Section() {
  const [books, setBooks] = useState<ProductProp[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const data = fetchAllBooks(page).then((data) => data.results);
    data.then((data) => setBooks(data));
  }, [page]);

  return (
    <div className='bg-white'>
      <div className='max-w-sm mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
        <h2 className='sr-only'>Products</h2>

        <div className='grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
          {books.map((book: ProductProp) => (
            <Product book={book} key={book.id} />
          ))}
        </div>
      </div>
      <nav className='flex justify-center my-5'>
        <ul className='inline-flex -space-x-px'>
          <li onClick={page > 1 ? () => setPage(page - 1) : () => setPage(1)}>
            <a
              href='#'
              className='py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
            >
              Previous
            </a>
          </li>
          {[...Array(10)].map((_, i) => (
            <li key={i} onClick={() => setPage(i + 1)}>
              <a
                href='#'
                className='py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                style={{ backgroundColor: page === i + 1 ? '#ddd' : '' }}
              >
                {i + 1}
              </a>
            </li>
          ))}
          <li onClick={page < 10 ? () => setPage(page + 1) : () => setPage(10)}>
            <a
              href='#'
              className='py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

import { Link } from 'react-router-dom';
import { ProductProp } from '../utils/types';

const Product = ({ book }: { book: ProductProp }) => {
  return (
    <div className='w-full max-w-sm bg-transparent rounded-lg shadow-md  dark:border-gray-700'>
      <Link to={`/book/${book.id}`}>
        <img
          className='p-8 rounded-t-lg h-80 object-cover object-center'
          src={book.formats['image/jpeg']}
          alt='product image'
        />
      </Link>
      <div className='px-5 pb-5'>
        <a href='#'>
          <h5 className='text-xl font-semibold tracking-tight text-gray-900 dark:text-gray'>
            {book.title?.length > 20
              ? book.title?.slice(0, 20) + '...'
              : book?.title}
          </h5>
        </a>
        <div className='flex items-center mt-2.5 mb-5'>
          <span className='bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800'>
            {book.authors[0]?.name?.length > 20
              ? book.authors[0]?.name?.slice(0, 20) + '...'
              : book.authors[0]?.name}
          </span>
        </div>
        <div className='flex justify-between items-center'>
          <span className='text-md font-bold text-gray-900 dark:text-gray'>
            Downloaded: {book.download_count}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Product;

import { useState } from 'react';
const Navbar = () => {
  const [input, setInput] = useState<string>('');
  return (
    <nav className='bg-transparent border-gray-200 px-2 sm:px-4 py-2.5 mx-5 mt-5'>
      <div className='container flex flex-wrap justify-between items-center mx-auto'>
        <a href='/'>
          <span className='flex cursor-pointer self-center text-xl font-semibold whitespace-nowrap dark:text-black'>
            Booksy
          </span>
        </a>
        <div className='flex md:order-2'>
          <div className=' relative md:block'>
            <input
              value={input}
              type='text'
              id='search-navbar'
              className='block p-2 pl-5 w-full  rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='Demo only...'
              onChange={(e) => setInput(e.target.value)}
            />
            <div className='flex absolute inset-y-0 right-0 items-center pr-3 pointer-events '>
              <svg
                className=' cursor-pointer w-5 h-5 text-gray-500'
                aria-hidden='true'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                  clip-rule='evenodd'
                ></path>
              </svg>
            </div>
          </div>
        </div>

        <div className='flex overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600'>
          <svg
            className='absolute -left-1 w-12 h-12 text-gray-400'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill-rule='evenodd'
              d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z'
              clip-rule='evenodd'
            ></path>
          </svg>
        </div>
      </div>

      {/* bottom nav */}

      <div className='container flex flex-wrap justify-center items-center mx-auto mt-10'>
        <button
          data-collapse-toggle='mobile-menu'
          type='button'
          className='inline-flex justify-center items-center ml-3 text-gray-400 rounded-lg md:hidden hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-500'
          aria-controls='mobile-menu-2'
          aria-expanded='false'
        >
          <span className='sr-only'>Open main menu</span>
          <svg
            className='w-6 h-6'
            aria-hidden='true'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill-rule='evenodd'
              d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
              clip-rule='evenodd'
            ></path>
          </svg>
        </button>
        <div className='hidden w-full md:block md:w-auto' id='mobile-menu'>
          <ul className='flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white  dark:border-gray-700'>
            <li>
              <a
                href='/'
                className='block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue dark:hover:bg-gray-700 dark:hover:text-blue md:dark:hover:bg-transparent'
                aria-current='page'
              >
                Home
              </a>
            </li>
            <li>
              <button
                id='dropdownNavbarLink'
                data-dropdown-toggle='dropdownNavbar'
                className='flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent'
              >
                Dropdown{' '}
                <svg
                  className='ml-1 w-5 h-5'
                  aria-hidden='true'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
              </button>
              <div
                id='dropdownNavbar'
                className='hidden z-10 w-44 font-normal bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600'
              >
                <ul
                  className='py-1 text-sm text-gray-700 dark:text-gray-400'
                  aria-labelledby='dropdownLargeButton'
                >
                  <li>
                    <a
                      href=''
                      className='block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href=''
                      className='block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href=''
                      className='block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                    >
                      Earnings
                    </a>
                  </li>
                </ul>
                <div className='py-1'>
                  <a
                    href=''
                    className='block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white'
                  >
                    Sign out
                  </a>
                </div>
              </div>
            </li>
            <li>
              <a
                href=''
                className='block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400  dark:hover:bg-gray-700 dark:hover:text-blue md:dark:hover:bg-transparent'
              >
                Services
              </a>
            </li>
            <li>
              <a
                href=''
                className='block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-blue md:dark:hover:bg-transparent'
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href=''
                className='block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400  dark:hover:bg-gray-700 dark:hover:text-blue md:dark:hover:bg-transparent'
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

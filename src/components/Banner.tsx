import React from 'react';

const Banner: React.FC = () => {
  return (
    <>
      <div className='min-h-full'>
        <main>
          <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
            <div className='px-4 py-6 sm:px-0'>
              <img
                src='https://www.georginalibrary.ca/en/resourcesGeneral/discover-your-library-banner-1230x425_0.png'
                alt=''
                className='w-full h-full rounded-xl border-4 border border-gray-200 '
              />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Banner;

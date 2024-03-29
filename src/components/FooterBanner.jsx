import React from 'react';

const FooterBanner = () => {

  const year = new Date().getFullYear()
  
  return (
    <div className='w-full px-10 bg-blue-600 flex flex-col sm:flex-row py-10 justify-center gap-10 md:gap-52 text-white'>
      <div className='flex flex-col'>
        <div>
          <p>Greenberg&Hastings Associates</p>
        </div>
        <div>
          <a href='mailto:green.hastings@aol.com'>green.hastings@aol.com</a>
          <p>(233) 22 243 9899</p>
        </div>
      </div>

      <div className=' flex flex-col gap-4'>
        <p className='w-full md:w-72 text-[18px] font-medium'>
          We believe legal counsel should strengthen communities
        </p>

        <p>© {year} Greenberg&Hastings Associates</p>
      </div>
    </div>
  );
};

export default FooterBanner;

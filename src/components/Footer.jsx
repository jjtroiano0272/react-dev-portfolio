import React, { useState } from 'react';

export default function Footer(props) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'auto',
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  return (
    <footer className='footer bg-secondary pt-4 pb-5 p-3 px-md-6 px-xxl-5'>
      <div className='text-center'>
        <button
          type='button'
          className='btn btn-outline-light btn-rounded mb-3'
          data-mdb-ripple-color='dark'
          onClick={scrollToTop}
        >
          Back to top
        </button>
      </div>
      <div style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
        <div>
          <p className='mb-2 small'>&#169; 2021 J. Troiano</p>
        </div>

        <div className='ms-auto'>
          <p className='small'>
            <a
              href='https://www.streamlinehq.com'
              className='text-reset text-decoration-none'
            >
              Designs by Streamline
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

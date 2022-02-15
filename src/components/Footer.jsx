import React, { useState } from 'react';

export default function Footer(props) {
  return (
    <footer className='footer bg-secondary py-5 px-md-6 px-xxl-5'>
      <div className='text-center'>
        <button
          type='button'
          class='btn btn-outline-light btn-rounded'
          data-mdb-ripple-color='dark'
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

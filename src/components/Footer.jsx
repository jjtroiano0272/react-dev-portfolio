import React, { useState } from 'react';

export default function Footer(props) {
  return (
    <footer className='footer pt-5 pb-2 bg-secondary'>
      <div className='container text-dark'>
        <div>
          <p>
            <small className='mb-2'>&#169; 2021 J. Troiano</small>
          </p>
        </div>
        <div className='ms-auto'>
          <p>
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

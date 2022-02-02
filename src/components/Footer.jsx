import React, { useState } from 'react';

export default function Footer(props) {
  return (
    <footer className='footer mt-5'>
      <div className='container'>
        <div>
          <p>
            <small className='text-secondary mb-2'>
              &#169; 2021 J. Troiano
            </small>
          </p>
        </div>
        <div className='ms-auto'>
          <p>
            <a
              href='https://www.streamlinehq.com'
              className='text-secondary text-decoration-none'
            >
              Designs by Streamline
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

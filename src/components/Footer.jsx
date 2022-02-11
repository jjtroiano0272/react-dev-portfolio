import React, { useState } from 'react';

export default function Footer(props) {
  return (
    <footer className='footer pt-5 pb-5 bg-secondary'>
      <div className='container' style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
        <div>
          <p>
            <small className='mb-2'>&#169; 2021 J. Troiano</small>
          </p>
        </div>
        <div className='ms-auto'>
          <p>
            <small>
              <a
                href='https://www.streamlinehq.com'
                className='text-reset text-decoration-none'
              >
                Designs by Streamline
              </a>
            </small>
          </p>
        </div>
      </div>
    </footer>
  );
}

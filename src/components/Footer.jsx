import React, { useState } from 'react';

export default function Footer(props) {
  return (
    <footer className='footer mt-5'>
      <div className='container'>
        <div>
          <p>
            <small className='text-secondary mb-2'>© 2021 J. Troiano</small>
          </p>
        </div>
        <div className='ms-auto'>
          <p>
            <a
              href='https://www.streamlinehq.com'
              className='pointer text-secondary'
            >
              Free Design Thinking SVG illustration by Streamline View Profile
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

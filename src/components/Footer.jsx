import React, { useState } from 'react';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import TwitterIcon from '@mui/icons-material/Twitter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer(props) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
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
              Illustrations by Streamline{' '}
              <sup>
                <OpenInNewIcon style={{ fontSize: '75%' }} />
              </sup>
            </a>
          </p>
        </div>
      </div>

      {/* <div className='text-center'>
        <ul className='navbar-nav justify-content-center collapse show navbar-collapse'>
          <li className='nav-item px-4'>
            <a href='https://twitter.com/TroianoJonathan' className='nav-link'>
              <TwitterIcon style={{ fontSize: '2.8em' }} />
            </a>
          </li>
          <li className='nav-item px-4'>
            <a
              href='https://stackoverflow.com/users/14810011/jonathan-troiano'
              className='nav-link'
            >
              <FontAwesomeIcon icon='fa-brands fa-stack-overflow' />
            </a>
          </li>
        </ul>
      </div> */}
    </footer>
  );
}

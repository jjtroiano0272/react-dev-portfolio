import Navbar from './Navbar-Bootstrap';
import TypeAnimation from 'react-type-animation';
import Fade from 'react-reveal/Fade';
import illustrationThinking from '../image/streamline-icon-design-thinking@250x250.svg';

export default function Intro() {
  return (
    <div
      className='container-fluid bg-intro text-center text-md-left'
      id='section-intro'
    >
      {/* <div className='intro-bottom-divider'>
        <svg
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1200 120'
          preserveAspectRatio='none'
        >
          <path
            d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'
            className='shape-fill'
          ></path>
        </svg>
      </div> */}

      <Navbar />

      <div className='row align-items-center'>
        <div className='col-12 col-md-6' style={{ height: '20vh' }}>
          <TypeAnimation
            className='text-title mb-4'
            cursor={true}
            sequence={["Hi! I'm { WebDev } Jonathan.", 1000]}
            wrapper='h1'
            repeat={1}
          ></TypeAnimation>
          <Fade delay={2700}>
            <p className='text-muted'>Collaborative, determined.</p>
          </Fade>
        </div>
        <div className='col-12 col-md-6'>
          <img
            src={illustrationThinking}
            alt='Quirky illustration of an engineer thinking'
            className='mt-sm-5 my-5'
            style={{ maxWidth: '80vw' }}
            // className='min-vh-100 vw-100'
          />
        </div>
      </div>
    </div>
  );
}

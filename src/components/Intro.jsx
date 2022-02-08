import Navbar from './Navbar-Bootstrap';
import illustrationThinking from '../image/streamline-icon-design-thinking@250x250.svg';

export default function Intro() {
  return (
    <div
      className='container-fluid test-bg-1 text-center text-md-left vh-100 position-relative'
      id='section-intro'
    >
      <div className='custom-shape-divider-bottom-1644088460'>
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
      </div>

      <Navbar />

      <h1 className='text-title mb-4'>Hi! I'm &#123; WebDev &#125; Jonathan</h1>
      <p className='text-muted'>Collaborative, determined.</p>
      <img
        src={illustrationThinking}
        alt='Quirky illustration of an engineer thinking'
        className='mt-5'
        // className='min-vh-100 vw-100'
      />
    </div>
  );
}

import Navbar from './Navbar-Bootstrap';
import TypeAnimation from 'react-type-animation';
import Fade from 'react-reveal/Fade';
import illustrationBugFixing from '../image/streamline-icon-fixing-bugs@250x250.SVG';

export default function Intro() {
  return (
    <div
      className='container-fluid bg-intro bg-intro-md text-center vh-100'
      id='intro'
    >
      <Navbar className='testing' />

      <div className='row align-items-center'>
        <div className='col-12 col-md-6 mt-5 mb-4' style={{ height: '20vh' }}>
          <TypeAnimation
            wrapper='h1'
            className='text-landing-title mb-4 px-5'
            cursor={true}
            sequence={[`Hi! I'm {WebDev} Jonathan.`, 1000]}
            repeat={1}
          />
          <Fade delay={2700}>
            <p className='text-muted p-0 p-md-4'>Collaborative, determined.</p>
          </Fade>
        </div>
        <div className='col-12 col-md-6'>
          <img
            src={illustrationBugFixing}
            alt='Quirky illustration of an engineer thinking'
            className='mt-sm-5 my-5 svg-illustration svg-illustration-md'
            // style={{ maxWidth: '75vh' }}
            // className='min-vh-100 vw-100'
          />
        </div>
      </div>
    </div>
  );
}

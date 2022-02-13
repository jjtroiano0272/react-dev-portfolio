import Navbar from './Navbar-Bootstrap';
import TypeAnimation from 'react-type-animation';
import Fade from 'react-reveal/Fade';
import illustrationThinking from '../image/streamline-icon-design-thinking@250x250.svg';

export default function Intro() {
  return (
    <div
      className='container-fluid bg-intro bg-intro-md text-center text-md-left vh-100'
      id='intro'
    >
      <Navbar />

      <div className='row align-items-center'>
        <div className='col-12 col-md-6' style={{ height: '20vh' }}>
          <TypeAnimation
            wrapper='h1'
            className='text-title mb-4'
            cursor={true}
            sequence={[`Hi! I'm { WebDev } Jonathan.`, 1000]}
            repeat={1}
          />
          <Fade delay={2700}>
            <p className='text-muted p-4'>Collaborative, determined.</p>
          </Fade>
        </div>
        <div className='col-12 col-md-6'>
          <img
            src={illustrationThinking}
            alt='Quirky illustration of an engineer thinking'
            className='mt-sm-5 my-5 max-vw-100'
            // style={{ maxWidth: '80vw' }}
            // className='min-vh-100 vw-100'
          />
        </div>
      </div>
    </div>
  );
}

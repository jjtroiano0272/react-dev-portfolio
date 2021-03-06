import illustrationCoffeeTea from '../image/streamline-icon-coffee-tea@250x250.svg';
import Fade from 'react-reveal/Fade';

export default function Skills() {
  return (
    <div
      className='container-fluid text-center bg-color-2 py-5 position-relative'
      id='skills'
    >
      <div className='custom-shape-divider-top-1644088736'>
        <svg
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1200 120'
          preserveAspectRatio='none'
        >
          <path
            d='M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z'
            className='shape-fill'
          ></path>
        </svg>
      </div>
      <div className='custom-shape-divider-bottom-1644089737'>
        <svg
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1200 120'
          preserveAspectRatio='none'
        >
          <path
            d='M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z'
            className='shape-fill'
          ></path>
        </svg>
      </div>

      <Fade bottom>
        <h1
          className='text-uppercase text-dark mt-md-6 mb-lg-5'
          style={{ marginTop: '8.5rem' }}
        >
          SKILLS
        </h1>
      </Fade>

      <div className='row' style={{ marginBottom: '8.5rem' }}>
        <div className='col-12 col-md-6 d-flex justify-content-center mw-100 my-4'>
          <img
            src={illustrationCoffeeTea}
            alt='Quirky illustration of pour-over coffee and a Chemex (TM)'
            className='image-scale'
          />
        </div>
        {/* <div className='col-12 col-md-6 d-flex flex-column justify-content-center mw-100'> */}
        <div className='col-12 col-md-6 d-flex flex-column my-auto mw-100 my-text-scale'>
          <h4>Programming Languages</h4>
          <p>C++, CSS, HTML, Java, Javascript, M Power Query, Python, R, SQL</p>
          <hr />
          <h4>Web Development Technologies</h4>
          <p>
            APIs, Bootstrap, Node.js, Responsive Web Development, Three.js,
            React, Material UI Design
          </p>
          <hr />
          <h4>Business Analytics</h4>
          <p>Microsoft Power BI, TOAD Data Point</p>
        </div>
      </div>
    </div>
  );
}

import illustrationCoffeeTea from '../image/streamline-icon-coffee-tea@250x250.svg';

export default function Skills() {
  return (
    <div
      className='container-fluid text-center bg-color-secondary py-5 position-relative'
      id='section-skills'
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
      <h2 className='text-header text-dark'>SKILLS</h2>
      <img
        src={illustrationCoffeeTea}
        alt='Quirky illustration of pour-over coffee and a Chemex (TM)'
      />
      <h4>Programming Languages</h4>
      <p>C++, CSS, HTML, Java, Javascript, M Power Query, Python, R, SQL</p>
      <hr />
      <h4>Web Development Technologies</h4>
      <p>
        APIs, Bootstrap, Node.js, Responsive Web Development, Three.js, React
      </p>
      <hr />
      <h4>Material UI Design Data & Business Analytics</h4>
      <p>Microsoft Power BI, TOAD Data Point</p>
    </div>
  );
}

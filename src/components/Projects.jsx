import KUTE from 'kute.js';
import illustrationBusinessDeal from '../image/streamline-icon-business-deal@250x250.svg';
import CardCollection from './CardCollection';
import Fade from 'react-reveal/Fade';

export default function Projects() {
  var tween = KUTE.fromTo(
    '#blob_start',
    { path: '#blob_start' },
    { path: '#blob_end' },
    { repeat: 999, duration: 3000, yoyo: true }
  ).start();

  return (
    <div className='container-fluid text-center py-5' id='projects'>
      {/* Probably gonna want to delete this */}
      <div className='spacer layer2 flip'></div>
      <Fade top>
        <h1 className='text-dark mt-4 mb-5'>PROJECTS</h1>
      </Fade>
      <img
        src={illustrationBusinessDeal}
        alt='Two people shake hands in a business deal, superimposed on a contract and dollar sign.'
        // style={{ height: '50vw' }}
        className='mb-5 mw-md-50'
      />
      <CardCollection />
      <svg
        id='visual'
        viewBox='0 0 960 540'
        width='960'
        height='540'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        version='1.1'
      >
        <g transform='translate(521.266765012597 270.34851476944857)'>
          <path
            id='blob_start'
            d='M74.7 -137.6C96.1 -102.5 112.2 -80.6 130.2 -55.3C148.2 -30 168.1 -1.5 162.7 22.1C157.3 45.7 126.5 64.3 108.9 106.6C91.3 149 86.9 215.1 58 245.5C29 276 -24.5 270.9 -78.1 258.5C-131.6 246.2 -185.2 226.6 -215.8 188.5C-246.3 150.5 -253.8 94 -238.3 48.5C-222.7 2.9 -184.1 -31.8 -171 -85.4C-157.8 -139 -170.2 -211.4 -145.9 -245.2C-121.6 -278.9 -60.8 -274 -17.1 -247.4C26.7 -220.8 53.3 -172.7 74.7 -137.6'
            fill='#f2f5c8'
          ></path>
        </g>

        {/* end */}
        <g transform='translate(483.12093435757606 253.67463338786416)'>
          <path
            id='blob_end'
            d='M112 -157.8C146.1 -152.3 175.4 -122.9 193.7 -87.2C212 -51.4 219.3 -9.4 227.7 43C236.1 95.4 245.6 158.2 218.4 188.9C191.3 219.6 127.5 218.2 77.6 206.5C27.7 194.8 -8.3 172.7 -49.2 162.9C-90.2 153 -136.2 155.4 -152.7 133.8C-169.3 112.1 -156.4 66.4 -175.2 17.6C-193.9 -31.1 -244.3 -82.9 -242.6 -120.8C-240.8 -158.7 -186.9 -182.8 -137.8 -181.5C-88.7 -180.2 -44.3 -153.4 -2.7 -149.2C38.9 -145 77.9 -163.3 112 -157.8'
            fill='#f2f5c8'
          ></path>
        </g>
      </svg>

      <div>{tween}</div>
      {/* Probably gonna want to delete this */}
      <div className='spacer layer2'></div>
    </div>
  );
}

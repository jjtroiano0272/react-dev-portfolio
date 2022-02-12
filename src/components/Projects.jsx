import illustrationBusinessDeal from '../image/streamline-icon-business-deal@250x250.svg';
import CardCollection from './CardCollection';
import Fade from 'react-reveal/Fade';

export default function Projects() {
  return (
    <div
      className='container-fluid bg-animated-blob text-center py-5'
      id='projects'
    >
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
    </div>
  );
}

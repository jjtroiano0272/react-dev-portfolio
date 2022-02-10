import illustrationBusinessDeal from '../image/streamline-icon-business-deal@250x250.svg';
import CardCollection from './CardCollection';

export default function Projects() {
  return (
    <div
      className='container-fluid bg-animated-blob text-center py-5'
      id='projects'
    >
      <h2 className='text-header text-dark mt-4 mb-5'>PROJECTS</h2>
      <img
        src={illustrationBusinessDeal}
        alt='Two people shake hands in a business deal, superimposed on a contract and dollar sign.'
        style={{ height: '70vw' }}
        className='mb-5'
      />

      <CardCollection />
    </div>
  );
}

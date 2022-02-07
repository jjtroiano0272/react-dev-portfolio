import projectsData from '../data/projectsData';
import { ShareIcon } from '@mui/icons-material/Share';
import { GitHubIcon } from '@mui/icons-material/GitHub';

export default function CardCollection() {
  return (
    <div className='card-deck py-5'>
      {projectsData.map((project, index) => (
        <div className='card'>
          <a href={project.url}>
            <img
              className='card-img-top'
              src={project.imgSrc}
              alt='Screenshot of a trivia app'
            />
          </a>
          <div className='card-body'>
            <h5 className='card-title'>
              <strong>{project.title}</strong>
            </h5>
            <p className='card-text'>{project.description}</p>
            <p className='card-text text-small text-muted'>
              <ShareIcon />
              <a href={project.git} className='text-reset'>
                <GitHubIcon />
              </a>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

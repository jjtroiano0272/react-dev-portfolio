import projectsData from '../data/projectsData';
import ShareIcon from '@mui/icons-material/Share';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function CardCollection() {
  return (
    <div className='card-deck'>
      {projectsData.map((project, index) => (
        <div className='card my-5' key={index}>
          <a href={project.url}>
            <img
              className='card-img-top'
              src={`${process.env.PUBLIC_URL}/assets/images/${project.imgSrc}`}
              alt={project.altText}
            />
          </a>
          <div className='card-body'>
            <h5 className='card-title'>
              <strong>{project.title}</strong>
            </h5>
            <p className='card-text'>{project.description}</p>
            <p className='card-text text-small text-muted mx-5'>
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

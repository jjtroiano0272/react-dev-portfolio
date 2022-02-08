import projectsData from '../data/projectsData';
import ShareIcon from '@mui/icons-material/Share';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function CardCollection() {
  return (
    <div className='card-deck px-md-5 row'>
      {projectsData.map((project, index) => (
        <div className='col-sm-6'>
          <div
            className='card'
            key={index}
            style={{ marginTop: '6rem', marginBottom: '6rem' }}
          >
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
        </div>
      ))}
    </div>
  );
}

import projectsData from '../data/projectsData';
import ShareIcon from '@mui/icons-material/Share';
import GitHubIcon from '@mui/icons-material/GitHub';
import Chip from '@mui/material/Chip';

export default function CardCollection() {
  return (
    <div className='card-deck row px-md-5 '>
      {projectsData.map(
        (project, index) =>
          project.imgSrc && (
            <div
              className='col-sm-6 col-lg-4 d-flex align-items-stretch'
              key={index}
            >
              <div
                className='card rounded border-secondary'
                style={{
                  marginTop: '1.5rem',
                  marginBottom: '1.5rem',
                }}
              >
                <a href={project.url}>
                  <div className='img-gradient'>
                    <img
                      className='card-img-top img-fluid w-100 img-gradient'
                      src={`${process.env.PUBLIC_URL}/assets/images/${project.imgSrc}`}
                      alt={project.altText}
                    />
                  </div>
                </a>

                <div className='card-body'>
                  <h5 className='card-title'>
                    <strong>{project.title}</strong>
                  </h5>
                  <p className='card-text'>{project.description}</p>
                  {/* <p className='card-text text-small text-muted mx-5'> */}
                  <div className='d-flex justify-content-around'>
                    <ShareIcon />
                    <a href={project.git} className='text-reset'>
                      <GitHubIcon />
                    </a>
                  </div>
                  {/* </p> */}
                </div>
              </div>
            </div>
          )
      )}
    </div>
  );
}

import projectsData from '../data/projectsData';
import ShareIcon from '@mui/icons-material/Share';
import GitHubIcon from '@mui/icons-material/GitHub';
import Chip from '@mui/material/Chip';
import Fade from 'react-reveal/Fade';

export default function CardCollection() {
  return (
    <div className='card-deck row px-md-5 '>
      {projectsData.map(
        (project, index) =>
          project.imgSrc && (
            <div
              className='col-12 col-sm-6 col-lg-4 d-flex align-items-stretch'
              key={index}
            >
              <Fade left>
                <div
                  className='card rounded shadow'
                  style={{
                    marginTop: '1.5rem',
                    marginBottom: '1.5rem',
                  }}
                >
                  <a href={project.url}>
                    <div className='img-gradient'>
                      <img
                        className='card-img-top'
                        style={{
                          objectFit: 'cover',
                          height: '50vh',
                          width: '100vw',
                        }}
                        src={`${process.env.PUBLIC_URL}/assets/images/${project.imgSrc}`}
                        alt={project.altText}
                      />
                    </div>
                  </a>
                  <div
                    className='card-body d-flex flex-column'
                    style={{
                      boxShadow: '0px -4px 3px rgba(12,12,12,0.07)',
                    }}
                  >
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
              </Fade>
            </div>
          )
      )}
    </div>
  );
}

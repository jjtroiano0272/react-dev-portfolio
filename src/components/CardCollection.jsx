import React, { useState, useEffect } from 'react';
import projectsData from '../data/projectsData';
import { MDBBadge } from 'mdb-react-ui-kit';
import ShareIcon from '@mui/icons-material/Share';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import GitHubIcon from '@mui/icons-material/GitHub';
import Fade from 'react-reveal/Fade';
import { Stack } from '@mui/material/Stack';
import { Button } from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from 'react-share';

export default function CardCollection() {
  const ExpandMore = styled(props => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      {/* New method */}
      {/* {projectsData.map(
        (project, index) =>
          project.imgSrc && (
            <Card
              sx={{ maxWidth: '100%' }}
              key={index}
              className='my-4'
              style={{ backgroundColor: '#c2bfbf' }}
            >
              <CardHeader title={project.title} />
              <a href={project.url}>
                <CardMedia
                  component='img'
                  height='290'
                  image={`${process.env.PUBLIC_URL}/assets/images/${project.imgSrc}`}
                  alt={project.altText}
                />
              </a>
              <CardContent>
                <Typography variant='body2' color='text.secondary'>
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label='share'>
                  <ShareIcon />
                </IconButton>
                <IconButton aria-label='add to favorites'>
                  <FavoriteIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout='auto' unmountOnExit></Collapse>
            </Card>
          )
      )} */}

      {/* Old method */}
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
                      <div
                        className='img-gradient'
                        style={{ position: 'relative' }}
                      >
                        {project.draft === true && (
                          <>
                            <MDBBadge
                              className='mx-2'
                              color='warning'
                              style={{
                                position: 'absolute',
                                top: '10px',
                                right: '10px',
                                color: '#000',
                              }}
                            >
                              DRAFT (in progress)
                            </MDBBadge>
                          </>
                        )}

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

                      <div className='d-flex justify-content-around'>
                        <ShareIcon />
                        <a href={project.git} className='text-reset'>
                          <GitHubIcon />
                        </a>
                      </div>
                    </div>
                  </div>
                </Fade>
              </div>
            )
        )}
      </div>
    </>
  );
}

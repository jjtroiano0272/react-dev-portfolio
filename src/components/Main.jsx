import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import axios from 'axios';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import { CardActionArea } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import * as loader from './common/rainbowSpinLoader';
import { ContactForm } from './ContactForm';
import Navbar from './Navbar-Bootstrap';
import illustrationThinking from '../image/streamline-icon-design-thinking@250x250.svg';
import illustrationBusinessDeal from '../image/streamline-icon-business-deal@250x250.svg';
import illustrationCoffeeTea from '../image/streamline-icon-coffee-tea@250x250.svg';
import triviaAppScreenshotLight from '../image/project images/trivia-app-light.png';
import triviaAppScreenshotDark from '../image/project images/trivia-app-dark.png';
// User-generated component imports go here

export default function Main(props) {
  return (
    <>
      {/* Redesign ribbon */}
      <div className='container-fluid bg-warning text-center p-1'>
        <p className='text-secondary'>Redesign in progress</p>
      </div>

      <div
        className='container test-bg-1 text-center text-md-left vh-100 position-relative'
        id='section-intro'
      >
        <div class='custom-shape-divider-bottom-1644088460'>
          <svg
            data-name='Layer 1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1200 120'
            preserveAspectRatio='none'
          >
            <path
              d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'
              class='shape-fill'
            ></path>
          </svg>
        </div>

        <Navbar />

        <h1>Hi! I'm &#123; WebDev &#125; Jonathan</h1>
        <p className='text-muted'>some buzzwords go here</p>
        <img
          src={illustrationThinking}
          alt='Quirky illustration of an engineer thinking'
          className='min-vh-100 vw-100'
        />
      </div>

      {/* Projects sction */}
      <div
        className='container bg-animated-blob text-center py-5'
        id='section-projects'
      >
        <h2 className='section-title text-dark mb-6'>PROJECTS</h2>
        <img
          src={illustrationBusinessDeal}
          alt='Two people shake hands in a business deal, superimposed on a contract and dollar sign.'
        />
        {/* Cards section */}

        <div className='row'>
          <div className='col-xs-12 col-md-4'>
            {/* TODO: Offload into its own component. this code implementation is uggo! */}
            <Card sx={{ maxWidth: 10000 }}>
              <a
                href='https://react-trivia-app-jjt.netlify.app'
                className='text-reset text-decoration-none'
              >
                <CardActionArea>
                  <CardMedia
                    component='img'
                    height='300'
                    image={triviaAppScreenshotLight}
                    alt='Trivia App Screenshot'
                  />
                  <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>
                      RESTful API Trivia
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      Test your trivia knowledge by pulling random questions
                      from the OpenTrivia API!
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </a>
              <CardActions>
                <Button size='small' color='primary'>
                  <ShareIcon />
                </Button>
                <Button size='small' color='primary'>
                  <a
                    href='https://github.com/jjtroiano0272/react-quiz-app'
                    className='text-reset text-decoration-none'
                  >
                    <GitHubIcon />
                  </a>
                </Button>
              </CardActions>
            </Card>
          </div>
        </div>

        <div className='row'>
          <div className='col-xs-12 col-md-4'>
            <Card sx={{ maxWidth: 10000 }}>
              <a
                href='https://react-trivia-app-jjt.netlify.app'
                className='text-reset text-decoration-none'
              >
                <CardActionArea>
                  <CardMedia
                    component='img'
                    height='300'
                    image={triviaAppScreenshotLight}
                    alt='Trivia App Screenshot'
                  />
                  <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>
                      RESTful API Trivia
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      Test your trivia knowledge by pulling random questions
                      from the OpenTrivia API!
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </a>
              <CardActions>
                <Button size='small' color='primary'>
                  <ShareIcon />
                </Button>
                <Button size='small' color='primary'>
                  <a
                    href='https://github.com/jjtroiano0272/react-quiz-app'
                    className='text-reset text-decoration-none'
                  >
                    <GitHubIcon />
                  </a>
                </Button>
              </CardActions>
            </Card>
          </div>
        </div>
        {/* /Cards section */}
      </div>

      {/* Skills section */}
      <div
        className='container text-center bg-color-secondary py-5 position-relative'
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

        <h2 className='section-title text-dark'>SKILLS</h2>
        <img src={illustrationCoffeeTea} alt='' />
      </div>

      {/* Certifications section */}
      {/* TODO: Card layout */}
      <div className='container text-center py-5' id='section-certifications'>
        <h2 className='section-title text-dark'>CERTIFICATIONS</h2>
        <ul className='col-xs-12 py-5' style={{ listStyleType: 'none' }}>
          <li>
            <img
              className='cert-badge'
              src='https://images.credly.com/images/68468004-5a85-4f3b-bc58-590773979486/AWS-CloudPractitioner-2020.png'
              alt='AWS Cloud Certified Professional'
            />
          </li>
          <li>
            <img
              className='cert-badge'
              src='https://education.oracle.com/file/general/Oracle-Certification-badge_OC-JuniorAssociate.png'
              alt='Oracle Certified Junior Associate'
            />
          </li>
        </ul>
      </div>

      {/* About section */}
      <div
        className='container text-center bg-color-tertiary py-5'
        id='section-about'
      >
        <h2 className='section-title'>ABOUT</h2>
        <p className='text-muted'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
          itaque excepturi cumque distinctio quasi reiciendis ratione! Sapiente,
          in. Nobis, id. Libero aut, maiores dicta perspiciatis provident
          perferendis quia illum similique? Illum quia nesciunt voluptatem ipsam
          quos facilis, atque, at maxime quisquam expedita odit est
          exercitationem incidunt assumenda odio laborum cupiditate
          necessitatibus iure cumque minima eos corrupti, sapiente vel beatae?
          Quidem vero dolores ut, error libero at magnam nam debitis cum
          mollitia provident repellendus, quam autem sit eligendi tenetur? Totam
          minima voluptatum nulla et deserunt eligendi sequi assumenda a eaque
          enim, suscipit adipisci in similique autem. Mollitia numquam veniam
          distinctio eum!
        </p>
      </div>

      {/* Contact section */}
      <div
        className='container text-center bg-color-quaternary py-5'
        id='section-contact'
      >
        <h2 className='section-title text-light'>Contact</h2>
        <ContactForm />
      </div>
    </>
  );
}

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
      {/* VERSION 1 &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*/}
      <div className='section bg-color-primary'>
        {/* VERSION 2 &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*/}
        {/* <div className='section bg-color-primary'>
        <div className='d-flex flex-column flex-md-row align-items center'>
          <nav className='mr-md-3'>
            <a className='nav-item nav-link' href=''>
              <GitHubIcon />
            </a>
            <a href=''>Item2</a>
            <a href=''>Item3</a>
          </nav>
        </div> */}

        <Navbar />

        <h1>Hi! I'm &#123; WebDev &#125; Jonathan</h1>
        <p className='text-muted'>some buzzwords go here</p>
        <img src={illustrationThinking} alt='' />
      </div>

      <div className='wave'>
        <svg
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1200 120'
          preserveAspectRatio='none'
        >
          <path
            d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z'
            opacity='.25'
            className='shape-fill'
          ></path>
          <path
            d='M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z'
            opacity='.5'
            className='shape-fill'
          ></path>
          <path
            d='M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z'
            className='shape-fill'
          ></path>
        </svg>
      </div>

      <div className='section'>
        <h2>Projects</h2>
        <img
          src={illustrationBusinessDeal}
          alt='Two people shake hands in a business deal, superimposed on a contract and dollar sign.'
        />

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
      </div>
      <div className='section bg-color-secondary'>
        <h2>Skills</h2>
        <img src={illustrationCoffeeTea} alt='' />
      </div>
      <div className='section'>
        <h2>Certifications</h2>
        <ul>
          <li>AWS</li>
          <li>Oracle</li>
        </ul>
      </div>
      <div className='section bg-color-tertiary'>
        <h2>About</h2>
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
      <div className='section bg-color-quaternary' id='contact'>
        <h2 className='text-light'>Contact</h2>
        <ContactForm />
      </div>
    </>
  );
}

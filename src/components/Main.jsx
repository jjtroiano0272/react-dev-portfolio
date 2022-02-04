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

      <div className='container bg-color-secondary text-center text-md-left vh-100'>
        <Navbar />
        <h1>Hi! I'm &#123; WebDev &#125; Jonathan</h1>
        <p className='text-muted'>some buzzwords go here</p>
        <img
          src={illustrationThinking}
          alt='Quirky illustration of a gentleman thinking of engineering'
          className='min-vh-100 vw-100'
        />
      </div>

      <div className='container bg-stacked-waves-C text-center'>
        <h2 className='section-title text-dark mb-6'>PROJECTS</h2>
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

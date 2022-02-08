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
import ShareIcon from '@mui/icons-material/Share';
import GitHubIcon from '@mui/icons-material/GitHub';
import { CardActionArea } from '@mui/material';
import * as loader from './common/rainbowSpinLoader';
import { ContactForm } from './ContactForm';
import ContactFormHTML from './ContactFormHTML';
import Navbar from './Navbar-Bootstrap';
import RedesignRibbon from './common/Ribbon';
import Intro from './Intro';
import Projects from './Projects';
import Skills from './Skills';
import Certifications from './Certifications';

// User-generated component imports go here
import About from './About';

export default function Main(props) {
  return (
    <>
      <RedesignRibbon />
      <Intro />
      <Projects />
      <Skills />
      <Certifications />
      <About />

      {/* Version 1 has the contact written with vanilla HTML */}
      <ContactFormHTML />
      {/* <ContactForm /> */}
    </>
  );
}

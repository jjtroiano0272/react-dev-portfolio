import React, { useState, useContext, useRef } from 'react';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import { ThemeContext } from './ThemeProvider';
import { useHotkeys } from 'react-hotkeys-hook';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import logo from '../image/react-logo.svg';
import { MaterialUISwitch } from './common/Switch';
import $ from 'jquery';
import LoginButton from './common/LoginButton';
import LogoutButton from './common/LogoutButton';
import UserProfile from './UserProfile';
import { useAuth0 } from '@auth0/auth0-react';
import { styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const inputRef = useRef(0);
  const { logout, loginWithRedirect, isAuthenticated, user, isLoading } =
    useAuth0();

  const pages = ['Products', 'Pricing', 'Blog'];
  const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

  // Switch theme
  useHotkeys(
    'cmd+/, ctrl+/',
    () => {
      toggleDarkMode();
    },
    [toggleDarkMode]
  );

  // Focus search box
  useHotkeys(
    'cmd+k, ctrl+k',
    () => {
      inputRef.current.focus();
    },
    [inputRef]
  );

  return (
    // <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
    // <h5 class="my-0 mr-md-auto font-weight-normal">LOGO</h5>

    // TODO: Offload and just call it darkMode switch? It condenses down to one line of code
    //  <Tooltip
    //   title={
    //     !darkMode ? 'Switch theme to dark mode' : 'Switch theme to light mode'
    //   }
    // >
    //   <FormGroup>
    //     <FormControlLabel
    //       className='mx-2'
    //       control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
    //       label=''
    //       // onClick={toggleDarkMode}
    //       data-tip
    //       data-for='lightDarkModeTip'
    //       type='checkbox'
    //     />
    //   </FormGroup>
    // </Tooltip>
    // <div className='d-flex flex-column flex-md-row p-3 px-md-4 mb-3'>
    // <div className='container pt-4'>
    <nav className='navbar navbar-expand-sm navbar-expand-xs navbar-light navbar-fixed-top mb-5 pt-5'>
      {/* <div className='collase navbar-collapse'></div> */}
      {/* <div className='collapse navbar-collapse'> */}
      <div className='container-fluid'>
        <ul className='navbar-nav justify-content-center collapse show navbar-collapse'>
          <li className='nav-item px-4'>
            <a href='https://github.com/jjtroiano0272' className='nav-link'>
              <GitHubIcon style={{ fontSize: '2.8em' }} />
            </a>
          </li>
          <li className='nav-item px-4'>
            <a
              href='https://www.linkedin.com/in/jonathan-troiano/'
              className='nav-link'
            >
              <LinkedInIcon style={{ fontSize: '2.8em' }} />
            </a>
          </li>
          <li className='nav-item px-4'>
            <a href='#section-contact' className='nav-link'>
              <EmailIcon style={{ fontSize: '2.8em' }} />
            </a>
          </li>
        </ul>
      </div>
      {/* </div> */}
    </nav>
    // </div>
    // </div>
  );
}

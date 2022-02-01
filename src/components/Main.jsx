import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import axios from 'axios';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import * as loader from './common/rainbowSpinLoader';
// User-generated component imports go here

export default function Main(props) {
  return (
    <div className='container'>
      <h1>First Time Here?</h1>
      <ul>
        <li>
          Change the repo this pushes to! Otherwise you'll be pushing changes{' '}
          <strong>to the template!!!</strong>
        </li>
        <li>
          Change the name of the app in <code>package.json</code>
        </li>
        <li>
          Run <code>npm i</code> first
        </li>
      </ul>
    </div>
  );
}

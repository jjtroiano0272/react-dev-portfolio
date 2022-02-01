import React, { useState, useEffect, useContext } from 'react';
import ReactDOM from 'react-dom';
import {
  Route,
  Routes,
  Link,
  useRouteMatch,
  useParams,
} from 'react-router-dom';
import { nanoid } from 'nanoid';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Paper from '@mui/material/Paper';
import ReactTooltip from 'react-tooltip';
import Navbar from './components/Navbar-Bootstrap';
import About from './components/About';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import { ThemeContext } from './components/ThemeProvider';

export default function App() {
  const [data, setData] = useState();
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  // const [toggleDark, setToggleDark] = useState(false);
  // Theme settings used for MUI
  const theme = createTheme({
    palette: {
      // type: toggleDark ? 'dark' : 'light',
      type: 'dark',
    },
  });

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/my-profile' element={<UserProfile />} />
      </Routes>
    </>
  );
}

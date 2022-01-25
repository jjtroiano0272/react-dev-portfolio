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
import ReactTooltip from 'react-tooltip';
import Navbar from './components/Navbar-MUI';
import About from './components/About';
import Home from './components/Home';
import { ThemeContext } from './components/ThemeProvider';
import UserProfile from './components/UserProfile';

export default function App() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  const [data, setData] = useState();

  return (
    <>
      <Navbar />

      {/* If you go to __ display __ */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/my-profile' element={<UserProfile />} />
      </Routes>
    </>
  );
}

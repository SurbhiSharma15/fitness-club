import React from 'react';
import { Route, Routes } from 'react-router-dom';
//used to route between home page and exercise page
import { Box } from '@mui/material';

import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    // <>
    // <div> App !!hello world</div>
    // <div>hello bhai </div>
    // </>
    <Box width="400px" sx={{width: {xl: '1488px'}}} m="auto">
        {/* for responsiveness */}
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/exercise/:id' element={<ExerciseDetail />}/>
        </Routes>
        <Footer/>
    </Box>
  )
}

export default App;
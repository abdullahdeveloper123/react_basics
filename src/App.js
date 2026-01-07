import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from './components/Navbar';
import Api from './components/api';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Counter from './components/counter';
import { useEffect, useState } from 'react';


function App() {


  return (
    <>


      {/* Daily Exercises  */}
    
      <BrowserRouter> 
       <Navbar />
        <Routes>
          <Route path='/' element={<Counter />} />
          <Route path='/api' element={<Api />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;

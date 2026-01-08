import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from './components/Navbar';
import Api from './components/api';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Counter from './components/counter';
import { useEffect, useState } from 'react';
import FormValidation from './components/formValidation';
import ProductCards from './components/productCards';
import CustomToggle from './components/customToggle';
import Refcounter from './components/refHook';


function App() {

  


  return (
    <>


      {/* Daily Exercises  */}
    
      <BrowserRouter> 
      
       <Navbar />
        <Routes>
          <Route path='/counter' element={<Counter />} />
          <Route path='/formValidation' element={<FormValidation />} />
          <Route path='/api' element={<Api />} />
          <Route path='/' element={<ProductCards />} />
          <Route path='/customToggle' element={<CustomToggle />} />
          <Route path='/useRef' element={<Refcounter />} />



        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;

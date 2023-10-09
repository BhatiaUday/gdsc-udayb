import React from "react";
import { BrowserRouter, Route, Routes ,Navigate } from 'react-router-dom';
import Home from './pages/home';
import Error from './pages/error';
import Dashboard from "./pages/dashboard";




function App() {
  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/Home' element={<Navigate to="/" />} />
        <Route path='/Dashboard' element={<Dashboard />}/>
        <Route path='*' element={<Error/>} />
      </Routes>
    </BrowserRouter>  
  </>
  );
}

export default App;

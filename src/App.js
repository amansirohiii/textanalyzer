import React from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {Route, Routes} from 'react-router-dom'

function App() {

  return (
<>

<Navbar title="Text Analyzer"/>

<Routes>
  <Route path="/" element={<TextForm/>} />
  <Route path="/about" element={<About/>} />
</Routes>
</>

  );
}

export default App;

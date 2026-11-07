import Home from './Home.jsx';
import About from './Aboutytem.jsx';

import { Routes,Route } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="item/:id" element={<About />} />
    </Routes>
  );
}

export default App

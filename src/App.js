import React from 'react';
import Home from './pages/Home';
import { Routes, Route } from "react-router-dom"
import About from './pages/About';
import Notfound from './pages/Notfound';
import Lespays from './pages/Lespays';
import Puzzle from './pages/Puzzle';
import News from './pages/News';
import Classification from './pages/Classification';
import Codification from './pages/Codification';
import Bandeau from './pages/components/Bandeau';

const App = () => {
  return (
    <div className="app" >
      <div className='grandbandeau'>
      <Bandeau />
      </div>
    <div className="main">
      {/* Define all the routes */}
      <Routes>
        <Route path="/*" exact element={<Home />}></Route>
        <Route path="about" exact element={<About />}></Route>
        <Route path="pays" exact element={<Lespays />}></Route>
        <Route path="puzzle" exact element={<Puzzle />}></Route>
        <Route path="news" exact element={<News />}></Route>
        <Route path="classification" exact element={<Classification />}></Route>
        <Route path="codification" exact element={<Codification />}></Route>
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
    </div>
  </div>
  );
};

export default App;

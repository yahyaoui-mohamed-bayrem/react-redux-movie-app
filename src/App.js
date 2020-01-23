import React from 'react';
import './App.css';
import SearchBarr from './components/SeachBarr.js';
// import MovieRender from './components/MovieRender.js';
// import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import MyRoots from './components/MyRoot';
import MovieLoader from './components/MovieLoader.js';


function App() {
  return (
    <div className="App">
      <SearchBarr />
      <BrowserRouter>
      <Link to="/"> Movies </Link>
      <Route exact path="/" component={MovieLoader} />
      <MyRoots/>
      </BrowserRouter>
    </div>
  );
}

export default App;

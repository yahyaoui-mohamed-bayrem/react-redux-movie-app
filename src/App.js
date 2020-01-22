import React from 'react';
import './App.css';
import SearchBarr from './components/SeachBarr.js';
import MovieRender from './components/MovieRender.js';

function App() {
  return (
    <div className="App">
      <SearchBarr />
      <MovieRender />
    </div>
  );
}

export default App;

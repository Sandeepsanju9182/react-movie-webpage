import React, { useState, useEffect } from 'react';
import "./App.css";
import mockMovies from "./movies_data/mockMovies";
import MovieCard from './components/MovieCard';
import MovieModel from './components/MovieModel';
import Header from './components/Header';


const MOVIES_INITIAL = 20;
const MOVIES_PER_LOAD = 10;

const App = () => {
  const [movies, setMovies] = useState([]);
  const [visibleCount, setVisibleCount] = useState(MOVIES_INITIAL);
  const [modelMovie, setModelMovie] = useState(null);

  useEffect(() => {
    setMovies(mockMovies);
  }, []);

  const handleMoreMovies = () => {
    setVisibleCount((prev) => prev + MOVIES_PER_LOAD);
  };

  const displayedMovies = movies.slice(0, visibleCount);

  return (
    <div className="app">

      <Header/>

      <div className="movie-list">
        {displayedMovies.map((movie) => (
          <MovieCard 
            key={movie.id} 
            movie={movie} 
            openModel={setModelMovie} 
          />
        ))}
      </div>

      {visibleCount < movies.length && (
        <div className="load-more-container">
          <button onClick={handleMoreMovies} className="load-more-btn">Show More</button>
        </div>
      )}

      {/* Render the modal when a movie is selected */}
      {modelMovie && (
        <MovieModel 
          movie={modelMovie} 
          closeModel={() => setModelMovie(null)} 
        />
      )}
    </div>
  );
};

export default App;
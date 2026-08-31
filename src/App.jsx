import React,{useState,useEffect} from 'react';
import "./App.css";
import mockMovies from "./movies_data/mockMovies";

const MOVIES_INITIAL = 20;
const MOVIES_PER_LOAD = 10;

const App = () => {
  const [movies,setMovies] = useState([]);
  const [visibleCount,setVisibleCount] = useState(MOVIES_INITIAL);

  useEffect(()=>{
    setMovies(mockMovies);
  },[]);

  const handleMoreMovies = () => {

    setVisibleCount((prev) => prev + MOVIES_PER_LOAD)
  };

  const displayedMovies = movies.slice(0, visibleCount);

  return (
    <div className="app">
      <div className="movie-list">
        {displayedMovies.map((movie => (
          <div className="movie-card">
          <img src={movie.poster}
           alt="" />
          <h3>{movie.title}</h3>
          <p>{movie.rating}</p>
        </div>
        )))}
      </div>
      { visibleCount < movies.length && (
        <div className="load-more-container">
        <button onClick={handleMoreMovies} className="load-more-btn">Show More</button>
      </div>
      )}
    </div>
  )
}

export default App

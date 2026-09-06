import React from 'react';
import "./styles/MovieModel.css";

const MovieModel = ({ movie, closeModel }) => {
  if (!movie) return null;

  return (
    <div className="model-overlay" onClick={closeModel}>
      <div className="model-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={closeModel}>X</button>
        <img src={movie.poster} alt={movie.title} />
        {/* Fixed className from 'mode-info' to 'model-info' */}
        <div className="model-info">
          <h2>{movie.title} ({movie.year})</h2>
          <p>Rating: {movie.rating}</p>
          <p>{movie.overview}</p>
          <button className="model-action-btn">Watch Trailer</button>
        </div>
      </div>
    </div>
  );
};

export default MovieModel;
import React from 'react';
import './styles/MovieCard.css';

const MovieCard = ({ movie, openModel }) => {
  return (
    <div className="movie-card" onClick={() => openModel(movie)}>
      <img src={movie.poster} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>{movie.rating}</p>
    </div>
  );
};

export default MovieCard;
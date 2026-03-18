import React from 'react'
import { useParams, useOutletContext } from 'react-router-dom'

function MovieCard() {
  const { movieId } = useParams()
  const director = useOutletContext()

  if (!director) return <p>Loading movie...</p>

  const movie = director.movies.find((m) => m.id === movieId)

  if (!movie) {
    return <p>Movie not found</p>
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>Duration: {movie.time} minutes</p>
      <p>Genres: {movie.genres.join(', ')}</p>
    </div>
  )
}

export default MovieCard
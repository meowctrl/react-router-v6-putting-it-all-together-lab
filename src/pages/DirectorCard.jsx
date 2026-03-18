import React from 'react'
import { useParams, useOutletContext, Outlet, Link } from 'react-router-dom'

function DirectorCard() {
  const { id } = useParams()
  const directors = useOutletContext()

  if (!directors) return <p>Loading director...</p>

  const director = directors.find((d) => d.id === id)

  if (!director) {
    return <p>Director not found</p>
  }

  return (
    <div>
      <h2>{director.name}</h2>
      <p>{director.bio}</p>

      <h3>Movies</h3>
      <ul>
        {director.movies && director.movies.length > 0 ? (
          director.movies.map((movie) => (
            <li key={movie.id}>
              <Link to={`movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))
        ) : (
          <p>No movies found</p>
        )}
      </ul>

      <Link to={`movies/new`}>Add New Movie</Link>

      {}
      <Outlet context={director} />
    </div>
  )
}

export default DirectorCard
import React from 'react'
import { Link, useOutletContext } from 'react-router-dom'

function DirectorList() {
  const directors = useOutletContext()

  if (!directors || directors.length === 0) return <p>Loading directors...</p>

  return (
    <div>
      <h2>Directors</h2>
      <ul>
        {directors.map(director => (
          <li key={director.id}>
            <Link to={`/directors/${director.id}`}>{director.name}</Link>
          </li>
        ))}
      </ul>
      <Link to="/directors/new">Add New Director</Link>
    </div>
  )
}

export default DirectorList
import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'

function DirectorContainer() {
  const [directors, setDirectors] = useState([])

  useEffect(() => {
    fetch('/directors')
      .then((r) => {
        if (r.ok) return r.json()
        throw new Error('Network response was not ok')
      })
      .then(setDirectors)
      .catch(console.error)
  }, [])

  return (
    <div>
      <h1>Directors</h1>
      {}
      <Outlet context={directors} />
    </div>
  )
}

export default DirectorContainer
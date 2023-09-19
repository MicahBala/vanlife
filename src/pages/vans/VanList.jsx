import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

function VanList() {
  const [vans, setVans] = useState([])
  const [searchParams, setSearchParams] = useSearchParams()
  const typeFilter = searchParams.get('type')
  console.log('searchParams: ', typeFilter)

  useEffect(() => {
    fetch('/api/vans')
      .then((res) => res.json())
      .then((data) => setVans(data.vans))
  }, [])

  const displayedVans = !typeFilter
    ? vans
    : vans.filter((van) => van.type === typeFilter)

  const vanElements = displayedVans.map((van) => {
    return (
      <div key={van.id} className='van-tile'>
        <Link to={`/vans/${van.id}`}>
          <img src={van.imageUrl} />
          <div className='van-info'>
            <h3>{van.name}</h3>
            <p>
              ${van.price}
              <span>/day</span>
            </p>
          </div>
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
        </Link>
      </div>
    )
  })
  return (
    <div className='container van-list-container'>
      <h1>Explore our van options</h1>

      <div className='van-list-filter-buttons'>
        <button
          onClick={() => setSearchParams({ type: 'simple' })}
          className='van-type simple'
        >
          Simple
        </button>
        <button
          onClick={() => setSearchParams({ type: 'luxury' })}
          className='van-type luxury'
        >
          Luxury
        </button>
        <button
          onClick={() => setSearchParams({ type: 'rugged' })}
          className='van-type rugged'
        >
          Rugged
        </button>
        <button
          onClick={() => setSearchParams({})}
          to='.'
          className='van-type clear-filters'
        >
          Clear filter
        </button>
      </div>

      <div className='van-list'>{vanElements}</div>
    </div>
  )
}

export default VanList

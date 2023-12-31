import { useEffect, useState } from 'react'
import { useParams, Link, NavLink, Outlet } from 'react-router-dom'

function HostVanDetail() {
  const [currentVan, setCurrentVan] = useState(null)

  const { id } = useParams()

  const activeStyles = {
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: '#161616',
  }

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setCurrentVan(data.vans))
  }, [])

  return (
    <section>
      <Link to='..' relative='path' className='back-button'>
        &larr; <span>Back to all vans</span>
      </Link>

      {currentVan && (
        <div className='host-van-detail-layout-container'>
          <div className='host-van-detail'>
            <img src={currentVan.imageUrl} />
            <div className='host-van-detail-info-text'>
              <i className={`van-type van-type-${currentVan.type}`}>
                {currentVan.type}
              </i>
              <h3>{currentVan.name}</h3>
              <h4>${currentVan.price}/day</h4>
            </div>
          </div>

          <nav className='host-van-detail-nav'>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyles : null)}
              to='.'
              end
            >
              Details
            </NavLink>

            <NavLink
              style={({ isActive }) => (isActive ? activeStyles : null)}
              to='pricing'
            >
              Pricing
            </NavLink>

            <NavLink
              style={({ isActive }) => (isActive ? activeStyles : null)}
              to='photos'
            >
              Photos
            </NavLink>
          </nav>

          <Outlet context={{ currentVan }} />
        </div>
      )}
    </section>
  )
}

export default HostVanDetail

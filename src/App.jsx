import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import VanList from './pages/VanList.jsx'
import VanDetail from './pages/VanDetail.jsx'

import './server.jsx'

function App() {
  return (
    <>
      <header className='container'>
        <Link className='site-logo' to='/'>
          #VANLIFE
        </Link>
        <nav>
          <Link to='/about'>About</Link>
          <Link to='/vans'>Vans</Link>
        </nav>
      </header>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/vans' element={<VanList />} />
        <Route path='/vans/:id' element={<VanDetail />} />
      </Routes>
    </>
  )
}

export default App

import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'

function App() {
  return (
    <>
      <header className='container'>
        <Link className='site-logo' to='/'>
          #VANLIFE
        </Link>
        <nav>
          <Link to='/about'>About</Link>
        </nav>
      </header>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  )
}

export default App

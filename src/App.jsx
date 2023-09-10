import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import VanList from './pages/vans/VanList.jsx'
import VanDetail from './pages/vans/VanDetail.jsx'
import Layout from './components/Layout.jsx'
import './server.jsx'
import Dashboard from './pages/host/Dashboard.jsx'
import Income from './pages/host/Income.jsx'
import Reviews from './pages/host/Reviews.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/vans' element={<VanList />} />
          <Route path='/vans/:id' element={<VanDetail />} />
          <Route path='/host' element={<Dashboard />} />
          <Route path='/host/income' element={<Income />} />
          <Route path='/host/reviews' element={<Reviews />} />
        </Route>
      </Routes>
    </>
  )
}

export default App

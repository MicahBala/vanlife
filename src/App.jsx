import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import VanList from './pages/vans/VanList.jsx'
import VanDetail from './pages/vans/VanDetail.jsx'
import Layout from './components/Layout.jsx'
import HostLayout from './components/HostLayout.jsx'
import Dashboard from './pages/host/Dashboard.jsx'
import Income from './pages/host/Income.jsx'
import Reviews from './pages/host/Reviews.jsx'
import HostVans from './pages/host/HostVans.jsx'
import HostVanDetail from './pages/host/HostVanDetail.jsx'
import HostVanPhotos from './pages/host/HostVanPhotos.jsx'
import HostVanPricing from './pages/host/HostVanPricing.jsx'
import HostVanInfo from './pages/host/HostVanInfo.jsx'
import './server.jsx'
import NotFound from './pages/NotFound.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='vans' element={<VanList />} />
          <Route path='vans/:id' element={<VanDetail />} />
          <Route path='host' element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path='income' element={<Income />} />
            <Route path='reviews' element={<Reviews />} />
            <Route path='vans' element={<HostVans />} />
            <Route path='vans/:id' element={<HostVanDetail />}>
              <Route index element={<HostVanInfo />} />
              <Route path='pricing' element={<HostVanPricing />} />
              <Route path='photos' element={<HostVanPhotos />} />
            </Route>
          </Route>
          <Route path='*' element={<NotFound />} />
          {/* Catch-all route, matches any route note defined, it doesnt matter wher you put it */}
        </Route>
      </Routes>
    </>
  )
}

export default App

import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Speakers from './pages/Speakers'
import Sponsors from './pages/Sponsors'
import Team from './pages/Team'
import Venue from './pages/Venue'

export default function App() {
  return (
    <div className="app-root">
      <Header />
      <main className="page-wrap">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/team" element={<Team />} />
          <Route path="/venue" element={<Venue />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
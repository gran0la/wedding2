import { useState } from 'react'
import './App.css'
import './Colours.css'
import Nav from './components/nav/Nav'
import Dashboard from './pages/Dashboard/Dashboard.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  const [page, setPage] = useState<string>("/dashboard");

  return (
    <>
      <Router>
        <div className='app'>
          <Nav page={page} setPage={setPage} />
          <main className='page-content'>
            <Routes>
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/calendar' element={<p>calendar</p>} />
              <Route path='/weddings' element={<p>weddings</p>} />
              <Route path='/couples' element={<p>couples</p>} />
              <Route path='/messages' element={<p>messages</p>} />
              <Route path='/finances' element={<p>finances</p>} />
              <Route path='/profile' element={<p>profile</p>} />
              <Route path='/settings' element={<p>settings</p>} />
            </Routes>
          </main>
        </div>
      </Router>
    </>
  )
}

export default App

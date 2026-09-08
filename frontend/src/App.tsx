import { useState } from 'react'
import './App.css'
import './Colours.css'
import Nav from './components/nav/Nav'
import Dashboard from './pages/Dashboard/Dashboard.jsx'

function App() {
  const [page, setPage] = useState<string>("Dashboard");

  return (
    <>
      <div className='app'>

        <Nav page={page} setPage={setPage} />

        <main className='page-content'>
          {page === "Dashboard" && <Dashboard />}
        </main>

      </div>
    </>
  )
}

export default App

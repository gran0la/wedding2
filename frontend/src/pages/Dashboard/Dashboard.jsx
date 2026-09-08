import './Dashboard.css'
import { BellDot } from 'lucide-react'

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className='top'>
        <input placeholder='Search couples, venues, or dates... ' />
        <BellDot size={20} />
      </div>

      <div className='titles'>
        <h1>Good morning, User</h1>
        <p>Here's what's happening with your weddings.</p>
      </div>

      <div className='cards'>

      </div>

    </div>
  )
}

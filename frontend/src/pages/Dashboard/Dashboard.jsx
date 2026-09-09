import './Dashboard.css'
import { BellDot, CalendarDays, SquareText, UsersRound, Wallet } from 'lucide-react'
import Card from '../../components/card/Card.tsx'

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className='top'>
        <input placeholder='Search couples, venues, or dates... ' />
        <BellDot className='bell' size={20} />
      </div>

      <div className='titles'>
        <h1>Good morning, User</h1>
        <p>Here's what's happening with your weddings.</p>
      </div>

      <div className='cards'>
        <Card cardNotifications={5} cardDescription={"Upcoming weddings"} cardIcon={CalendarDays} />
        <Card cardNotifications={2} cardDescription={"New enquiries"} cardIcon={UsersRound} />
        <Card cardNotifications={3} cardDescription={"Pending tasks"} cardIcon={SquareText} />
        <Card cardNotifications={2} cardDescription={"Payments due"} cardIcon={Wallet} />
      </div>
    </div>
  )
}

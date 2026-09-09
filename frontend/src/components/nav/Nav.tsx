import './Nav.css';
import { useState, type ComponentType } from 'react';
import { House, CalendarDays, Heart, Users, MessageCircleMore, Wallet, UserRound, Settings, LogOut } from 'lucide-react';

export interface Option {
  icon: ComponentType<{ size?: number }>,
  tag: string
}

interface Properties {
  page: string,
  setPage: (page: string) => void
}

export default function Nav(props: Properties) {

  const options: Option[] = [
    { icon: House, tag: "Dashboard" },
    { icon: CalendarDays, tag: "Calendar" },
    { icon: Heart, tag: "Weddings" },
    { icon: Users, tag: "Couples" },
    { icon: MessageCircleMore, tag: "Messages" },
    { icon: Wallet, tag: "Finances" },
    { icon: UserRound, tag: "Profile" },
    { icon: Settings, tag: "Settings" }
  ];

  const iconSize: number = 18;

  return (
    <nav>
      <h1>everafter</h1>

      <ul>
        {
          options.map((option: Option) => option.tag === props.page ? <li key={option.tag} style={{ backgroundColor: "#DCE7EE" }} className='selected' onClick={() => { props.setPage(option.tag) }}> <option.icon size={iconSize} /> <p>{option.tag}</p></li> : <li key={option.tag} onClick={() => { props.setPage(option.tag) }}> <option.icon size={iconSize} /> <p>{option.tag}</p></li>)
        }
      </ul>

      <div className='bottom'>
        <div className='user-card'>
          <img />
          <div className='details'>
            <p className='username'>Ben Foubister</p>
            <p className='email'>benfoubister@cool.com</p>
          </div>
        </div>

        <li><LogOut size={iconSize} /><p>Logout</p></li>
      </div>
    </nav>
  )
}

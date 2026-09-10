import './Nav.css';
import { type ComponentType } from 'react';
import { House, CalendarDays, Heart, Users, MessageCircleMore, UserRound, Settings, LogOut, HandCoins } from 'lucide-react';
import { Link } from "react-router-dom";

export interface Option {
  icon: ComponentType<{ size?: number }>,
  tag: string,
  path: string
}

interface Properties {
  page: string,
  setPage: (page: string) => void
}

export default function Nav(props: Properties) {

  const options: Option[] = [
    { icon: House, tag: "Dashboard", path: "/dashboard" },
    { icon: CalendarDays, tag: "Calendar", path: "/calendar" },
    { icon: Heart, tag: "Weddings", path: "/weddings" },
    { icon: Users, tag: "Couples", path: "/couples" },
    { icon: MessageCircleMore, tag: "Messages", path: "/messages" },
    { icon: HandCoins, tag: "Finances", path: "/finances" },
    { icon: UserRound, tag: "Profile", path: "/profile" },
    { icon: Settings, tag: "Settings", path: "/settings" }
  ];

  const iconSize: number = 18;

  return (
    <nav>
      <h1>everafter</h1>

      <ul>
        {
          options.map((option: Option) => option.path === props.page ? <Link to={option.path}><li key={option.tag} style={{ backgroundColor: "#DCE7EE" }} className='selected' onClick={() => { props.setPage(option.path) }}> <option.icon size={iconSize} /> <p>{option.tag}</p></li></Link> : <Link to={option.path}><li key={option.tag} onClick={() => { props.setPage(option.path) }}> <option.icon size={iconSize} /> <p>{option.tag}</p></li></Link>)
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

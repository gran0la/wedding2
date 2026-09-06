import './Nav.css';
import { useState } from 'react';

export default function Nav() {

  const options = ["Dashboard", "Calendar", "Weddings", "Couples", "Messages", "Finances", "Profile", "Settings"];
  const [selectedOption, setSelectedOption] = useState<String>("Dashboard");

  return (
    <nav>
      <h1>everafter</h1>

      <ul>
        {
          options.map((option: String) => option === selectedOption ? <li className='selected' onClick={() => { setSelectedOption(option) }}>{option}</li> : <li onClick={() => { setSelectedOption(option) }}>{option}</li>)
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
      </div>
    </nav>
  )
}

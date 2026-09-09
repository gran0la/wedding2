import type { ComponentType } from "react"
import { MoveRight } from "lucide-react";
import './Card.css'

interface Properties {
  cardNotifications: number,
  cardDescription: string,
  cardIcon: ComponentType<{ size?: number; strokeWidth: number }>,
}

export default function Card(props: Properties) {
  return (
    <div className='card'>
      <div className='card-circle'>
        <props.cardIcon size={25} strokeWidth={1.5} />
      </div>
      <div className='card-description'>
        <h2>{props.cardNotifications}</h2>
        <p>{props.cardDescription}</p>
      </div>
      <div className='card-arrow'> <MoveRight size={15} /> </div>
    </div>
  )
}

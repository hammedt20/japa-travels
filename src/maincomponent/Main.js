import React from 'react'
import {Star1} from 'iconsax-react'
import Service from './Service'
import Travel from './Travel'
import Testimonial from './testimonial'
import '../styles.css'


const DestinationCard = (props) => {
  return(
    <article className='card'>
      <img src={props.img} alt='' />
      <div className='card-details'>
        <h4>{props.location}</h4>
        <div className='card-rating'>
          <div className='star-icons'>
            <Star1 color="#ffbb5e" variant="Bold"/>
            <Star1 color="#ffbb5e" variant="Bold"/>
            <Star1 color="#ffbb5e" variant="Bold"/>
            <Star1 color="#a6a7a4" variant="Bold"/>
            <Star1 color="#a6a7a4" variant="Bold"/>
          </div>
          <p>{props.price}</p>
        </div>
      </div>
    </article>
  )
}

const Destination = () => {
  const items = 
  [
    {
      img: './image/travel-1.jpg',
      location: 'Paris, France',
      price: '$450'
    },
    {
      img: './image/travel-2.jpg',
      location: 'Moscow, Russia',
      price: '$650'
    },
    {
      img: './image/travel-3.jpg',
      location: 'London, United Kingdom',
      price: '$300'
    }
  ]

  const destinations = items.map(item => {
    return (
      <DestinationCard
        {...item}
      />
    )
  })
  return (
      <div className='destination container section'>
          <h3>TOP DESTINATIONS</h3>
          <h1>Explore Top Destinations</h1>
          <div className='article grid'>
            {destinations}
          </div>
          <p>See More...</p>
      </div>
  )
}

const Main = () => {
  return (
    <main>
      <Destination />
      <Service />
      <Travel />
      <Testimonial />
    </main>
  )
}

export default Main
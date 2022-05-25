import React from 'react'
import '../styles.css'

const TravelCard = (props) => {
  return(
    <div className='travel-card'>
      <img src={props.img} alt=''/>
      <p className='btn'>{props.text}</p>
    </div>
  )
}

const Travel = () => {
  const items = [
    {
      img: './image/travel-card3.jpg',
      text: 'Exploration'
    },
    {
      img: './image/travel-card1.jpg',
      text: 'Ocean Drive'
    },
    {
      img: './image/travel-card2.jpg',
      text: 'Landmarks'
    }
  ]

  const travelItems = items.map(item => {
    return (
      <TravelCard 
        {...item}
      />
    )
  })
  return (
    <div className='travel section container'>
      <div className='travel-head'>
        <h3>TRAVEL TYPES</h3>
        <h1>Travel we Specialize in?</h1>
      </div>
      <div className='grid travel-item'>
        {travelItems}
      </div>
      <p>See More...</p>
    </div>
  )
}

export default Travel
import React from 'react'
import { MaximizeCircle, Star1, Airplane} from 'iconsax-react'
import '../styles.css'

const Services = (props) => {
  return(
    <div className='services'>
      <button className='btn'>{props.icon}</button>
      <div>
        <h2>{props.head}</h2>
        <h2 className='service-details'>{props.text}</h2>
      </div>
    </div>
  )
}

const Service = () => {
  const items = 
  [
    {
      icon: <MaximizeCircle size="32" color="#e4a54a" variant="Bold"/>,
      head: 'Choose Destination',
      text: 'Where are you planning for your vacation'
    },
    {
      icon: <Star1 size="32" color="#e4a54a" variant="Bold"/>,
      head: 'Five Star Hotel',
      text: 'Book a five star hotel for your vacation'
    },
    {
      icon: <Airplane size="32" color="#e4a54a" variant="Bold"/>,
      head: 'Air Ticketing',
      text: 'Book ticket for your flight'
    }
  ]

  const serviceItem = items.map(item => {
    return(
      <Services
        {...item}
      />
    )
  })
  return (
    <div className='service section container'>
      <h2>HOW IT WORKS</h2>
      <h1>We Offer The Best Services</h1>
      {serviceItem}
    </div>
  )
}

export default Service
import React from 'react'
import { Star1 } from 'iconsax-react'
import '../styles.css'

const TestimonialCard = (props) => {
  return (
    <article className='articles'>
      <div className='article-head'>
        <img src={props.img} alt=''/>
        <div className='article-text'>
          <h1>{props.name}</h1>
          <h2>{props.location}</h2>
        </div>
      </div>
      <div className='article-p'>
      Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except
      </div>
      <div className='article-icon'>
        <Star1 size="32" color="#FF8A65" variant="Bold"/>
        <Star1 size="32" color="#FF8A65" variant="Bold"/>
        <Star1 size="32" color="#FF8A65" variant="Bold"/>
        <Star1 size="32" color="#FF8A65" variant="Bold"/>
        <Star1 size="32" color="#FF8A65" variant="Bold"/>
      </div>
    </article>
  )
}

const testimonial = () => {

  const items = [
    {
      img: './image/user1.jpg',
      name: 'Robert Terr',
      location: 'Austin, Tx'
    },
    {
      img: './image/user2.jpg',
      name: 'Betty Kir',
      location: 'Paris, France'
    },
    {
      img: './image/user3.jpg',
      name: 'Richmond Dray',
      location: "Jo'burg, SA"
    }
  ]

  const TestimonialItem = items.map(item => {
    return (
      <TestimonialCard 
        {...item}
      />
    )
  })
  return (
    <div className='testimonial container section'>
      <div className='testimonial-head'>
        <h3>Testimonials</h3>
        <h1>What our clients say about us</h1>
      </div>
      <div className='grid article-grid'>
        {TestimonialItem}
      </div>
      <div className='testimonial-forms'>
        <h1>Subscribe to our newsletter</h1>
        <div className='testimonial-form'>
          <input type='text' placeholder='Your E-mail' />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default testimonial
import React from 'react'
import { Copyright, Facebook, Global, Instagram, Whatsapp } from 'iconsax-react'
import './styles.css'

const Footer = () => {
  return (
    <div className=' section container'>
      <div className='footer grid'>
        <div className='footer-list'>
          <h1 className='nav-logo'><Global size="32" color="#e4a54a"/> Japa Travels</h1>
          <ul className='icon-list'>
            <li><Whatsapp size='32' color='#E4A54A' variant='bold'/></li>
            <li><Facebook size='32' color='#E4A54A' variant='bold'/></li>
            <li><Instagram size='32' color='#E4A54A' variant='bold'/></li>
          </ul>
        </div>
        <div className='footer-list'>
          <h1>Company</h1>
          <ul>
            <li>About Us</li>
            <li>Destination</li>
            <li>Packages</li>
            <li>Contacts</li>
          </ul>
        </div>
        <div className='footer-list'>
          <h1>Help</h1>
          <ul>
            <li>Help</li>
            <li>FAQ</li>
            <li>Press</li>
          </ul>
        </div>
        <div className='footer-list'>
          <h1>More</h1>
          <ul>
            <li>Domestic Flights</li>
            <li>Investor Relation</li>
            <li>Partnership</li>
            <li>Job</li>
          </ul>
        </div>
        <div className='footer-list'>
          <h1>Terms</h1>
          <ul>
            <li>Private Policy</li>
            <li>Terms of Service</li>
            <li>Accessibility</li>
          </ul>
        </div>
      </div>
      <div className='footer-text'><Copyright size='32' color='#1c1e1d' variant='bold'/> Japa Travels 2022. All Rights Reserved</div>
    </div>
  )
}

export default Footer
import React from 'react'
import { Global, SearchNormal1 } from 'iconsax-react'
import './styles.css'

function Navbar (){
  return (
    <nav className='nav'>
      <div className='nav-logo'><Global size="32" color="#e4a54a"/> Japa Travels</div>
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Destination</li>
        <li>contact</li>
      </ul>
      <button className='btn'>Book Ticket</button>
    </nav>
  )
}

const Header = () => {
  return (
    <header className='header container'>
      <Navbar />
      <div className='header-text section'>
        <p className='header-orange'>BEST DESTINATIONS AROUND THE WORLD</p>
        <h1>Travel to any<br /> where in the<br /> world</h1>
        <p className='header-blue'>We can build the vacation of your dream and make them a memorable one.</p>
      </div>
      <div className='header-container grid'>
        <div>
          <p className='container-title'>Destination</p>
          <p className='container-text'>Paris</p>
        </div>
        <div>
          <p className='container-title'>Date</p>
          <p className='container-text'>Select date</p>
        </div>
        <div>
          <p className='container-title'>People</p>
          <p className='container-text'>Number of people</p>
        </div>
        <div className='header-btn'>
        <button><SearchNormal1 size="32" color="#fff"/></button>
        </div>
      </div>
    </header>
  )
}

export default Header
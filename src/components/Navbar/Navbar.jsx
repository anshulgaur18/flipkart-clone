import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './Navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
    <div className="navbar__spans">
      <span className='navbar__content'>
        Electronics
        <KeyboardArrowDownIcon/>
      </span>
      <span className='navbar__content'>
        TVs & Appliances
        <KeyboardArrowDownIcon/>
      </span>
      <span className='navbar__content'>
        Men
        <KeyboardArrowDownIcon/>
      </span>
      <span className='navbar__content'>
        Women
        <KeyboardArrowDownIcon/>
      </span>
      <span className='navbar__content'>
        Baby & Kids
        <KeyboardArrowDownIcon/>
      </span>
      <span className='navbar__content'>
        Home & Funiture
        <KeyboardArrowDownIcon/>
      </span>
      <span className='navbar__content'>
       Sports,Books & More
       <KeyboardArrowDownIcon/>
      </span>
      <span className='navbar__lessContent'>
        Flights
      </span>
      <span className='navbar__lessContent'>
       Offer Zone
      </span>
    </div>
    </div>
  )
}

export default Navbar
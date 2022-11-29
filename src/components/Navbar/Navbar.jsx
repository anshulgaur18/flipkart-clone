import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './Navbar.css';
import HoverDiv from './HoverDiv';

const Navbar = () => {

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);}

    const handleMouseLeave = () => {
      setIsHovering(false);
    };
  

  return (
    <div className='navbar'>
    <div className="navbar__spans">
      <span  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}  className='navbar__content'>
        Electronics
        {isHovering ? <KeyboardArrowDownIcon/> : <KeyboardArrowDownIcon style={{transform:"rotate(180deg)"}} />}
        {isHovering && <HoverDiv/>}
       
      </span>
      <span  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='navbar__content'>
        TVs & Appliances
        {isHovering ? <KeyboardArrowDownIcon/> : <KeyboardArrowDownIcon style={{transform:"rotate(180deg)"}} />}
        {isHovering && <HoverDiv/>}
       
      </span>
      <span  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='navbar__content'>
        Men
       
        {isHovering ? <KeyboardArrowDownIcon/> : <KeyboardArrowDownIcon style={{transform:"rotate(180deg)"}} />}
        {isHovering && <HoverDiv/>}
      </span>
    
      <span  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='navbar__content'>
        Women
        {isHovering ? <KeyboardArrowDownIcon/> : <KeyboardArrowDownIcon style={{transform:"rotate(180deg)"}} />}
        {isHovering && <HoverDiv/>}
       
      </span>
      <span  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='navbar__content'>
        Baby & Kids
        {isHovering ? <KeyboardArrowDownIcon/> : <KeyboardArrowDownIcon style={{transform:"rotate(180deg)"}} />}
        {isHovering && <HoverDiv/>}
       
      </span>
      <span  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='navbar__content'>
        Home & Funiture
        {isHovering ? <KeyboardArrowDownIcon/> : <KeyboardArrowDownIcon style={{transform:"rotate(180deg)"}} />}
        {isHovering && <HoverDiv/>}
       
      </span>
      <span  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='navbar__content'>
       Sports,Books & More
       {isHovering ? <KeyboardArrowDownIcon/> : <KeyboardArrowDownIcon style={{transform:"rotate(180deg)"}} />}
        {isHovering && <HoverDiv/>}
       
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
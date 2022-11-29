import React from 'react';
import './header.css'
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import MoreToolTip from './MoreToolTip';
import LoginToolTip from './LoginToolTip';
import "tippy.js/themes/light.css";
import { useState } from 'react';

function Header() {

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);}

    const handleMouseLeave = () => {
      setIsHovering(false);
    };
  

  return (
    <div className='header'>
      <div className="header__firstDiv"></div> 
      <div className="header__secondDiv">
        <div className="header__firstPart">
            <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="logo" />
            <div className="header__firstPartDiv">
              <p>Explore</p>
              <span>Plus</span>
              <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png" alt="plus" />
            </div>
        </div>
        <div className="header__secondPart">
          <input type='text' />
          <div className="header__search">
            <SearchIcon style={{fontSize:"2.5rem"}}/>
          </div> 
        </div>
        <div className="header__thirdPart">
        <Tippy  theme='light' content={<LoginToolTip/>} interactive={true} > 
        <button>Login</button>
        </Tippy>
       
        </div>
        <div className="header__fourthPart">
          <span>Become a Seller</span>
        </div>
        <div className="header__fifthPart">
       
        <Tippy theme='light' content={<MoreToolTip/>} interactive={true} >
        <span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <span>More</span>
        {isHovering ? <KeyboardArrowDownIcon/>:<KeyboardArrowDownIcon style={{width:'1.5rem', height:'1.5rem',transform:"rotate(180deg)"}}/>}
        </span>
        </Tippy>
        
      
          
     
        </div>
        <div className="header__sixthPart">
        <ShoppingCartIcon/>
        <span style={{marginLeft:'.5rem'}}>Cart</span>
        </div>
      </div> 
      <div className="header__firstDiv"></div> 
    </div>
  );
};

export default Header;
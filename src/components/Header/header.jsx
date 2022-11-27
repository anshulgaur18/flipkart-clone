import React from 'react';
import './header.css'
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Header() {
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
            <SearchIcon/>
          </div> 
        </div>
        <div className="header__thirdPart">
          <button>Login</button>
        </div>
        <div className="header__fourthPart">
          <span>Become a Seller</span>
        </div>
        <div className="header__fifthPart">
          <span>More</span>
          <KeyboardArrowDownIcon style={{width:'15x', height:'15px'}}/>
        </div>
        <div className="header__sixthPart">
        <ShoppingCartIcon/>
        <span style={{marginLeft:'5px'}}>Cart</span>
        </div>
      </div> 
      <div className="header__thirdDiv"></div> 
    </div>
  );
};

export default Header;
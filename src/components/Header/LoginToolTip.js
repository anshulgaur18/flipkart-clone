import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import "./LoginToolTip.css";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import StoreIcon from '@mui/icons-material/Store';

const LoginToolTip = () => {
  return (
    <div className='LoginToolTip'>
        <div className="LoginToolTip_in" style={{display:"flex" , justifyContent:"space-between"}} >
            <h4>New customer?</h4>
            <h4 style={{color:"#2874f0", width:"16" , height:"16"}}>Sign Up</h4>
        </div>
        <hr />
        <div className="LoginToolTip_in">
            <AccountCircleIcon style={{color:"#2874f0", width:"16" , height:"16"}}/>
            <p>My Profile</p>
        </div>
        <hr />
        <div className="LoginToolTip_in">
            <img  src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png" alt="logo" />
            <p>Flipkart Plus Zone</p>
        </div>
        <hr />
        <div className="LoginToolTip_in">
            <StoreIcon style={{color:"#2874f0", width:"16" , height:"16"}}/>
            <p>Orders</p>
        </div>
        <hr />
        <div className="LoginToolTip_in">
            <FavoriteIcon style={{color:"#2874f0", width:"16" , height:"16"}}/>
            <p>Wishlist</p>
        </div>
        <hr />
        <div className="LoginToolTip_in">
            <ConfirmationNumberIcon style={{color:"#2874f0", width:"16" , height:"16"}}/>
            <p>Rewards</p>
        </div>
        <hr />
        <div className="LoginToolTip_in">
            <AccountBalanceWalletIcon style={{color:"#2874f0", width:"16" , height:"16" }}/>
            <p>Gift Cards</p>
        </div>
    </div>
  )
}

export default LoginToolTip
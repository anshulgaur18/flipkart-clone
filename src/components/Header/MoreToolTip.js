import React from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import "./LoginToolTip.css";
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GetAppIcon from '@mui/icons-material/GetApp';


const MoreToolTip = () => {
  return (
    <div className='MoreToolTip'>
<div className="MoreToolTip_in">
<NotificationsIcon  style={{color:"#2874f0", width:"16" , height:"16"}}/>
<p>Notification Preferences</p>
</div>
<hr />
<div className="MoreToolTip_in">
<LiveHelpIcon  style={{color:"#2874f0", width:"16" , height:"16"}}/>
<p>24*7 Customer Care</p>
</div>
<hr />
<div className="MoreToolTip_in">
<TrendingUpIcon  style={{color:"#2874f0", width:"16" , height:"16"}}/>
<p>Advertise</p>
</div>
<hr />
<div className="MoreToolTip_in">
<GetAppIcon  style={{color:"#2874f0", width:"16" , height:"16"}}/>
<p>Download App</p>
</div>

    </div>
  )
}

export default MoreToolTip;
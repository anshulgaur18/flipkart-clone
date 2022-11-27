import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState } from 'react';
import './ratings.css';

import Content from '../../treeview/Content';

function Availability() {
    const changeAvailability = ()=>{
        document.getElementById('availabilitydrop').classList.toggle('showedratings');
          setIcon(!icon)
      }
      
      const [icon , setIcon] = useState(true);
  return (
    <div className="wrapper">
      <div className="item" onClick={()=> changeAvailability()}>
        <span>AVAILABILITY</span>
        <div className="changeIcon" style={{ display: 'inline-block',
    cursor: 'pointer',
    width: '21px',
    height: '19px'}} >
        {icon ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
        </div>
       </div>
      <div id='availabilitydrop' className='showratings'>
     < Content checkboxName='Include Out of Stock'/>
     
      </div>
    </div>
  )
}

export default Availability
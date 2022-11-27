import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState } from 'react';
import './ratings.css';
import Content from '../../treeview/Content';

function Offers() {

    const changeOffers = ()=>{
        document.getElementById('offersdrop').classList.toggle('showedratings');
          setIcon(!icon)
      }
      
      const [icon , setIcon] = useState(true);

  return (
    <div className="wrapper">
      <div className="item" onClick={()=> changeOffers()}>
        <span>OFFERS</span>
        <div className="changeIcon" style={{ display: 'inline-block',
    cursor: 'pointer',
    width: '21px',
    height: '19px'}} >
        {icon ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
        </div>
       </div>
      <div id='offersdrop' className='showratings'>
     < Content checkboxName='Buy More,Save More'/>
     < Content checkboxName='Special Price'/>
     
     
      </div>
    </div>
  )
}

export default Offers
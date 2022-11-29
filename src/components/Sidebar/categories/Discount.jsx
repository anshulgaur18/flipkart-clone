import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState } from 'react';
import './ratings.css';
import Content from '../../treeview/Content';

function Discount() {

    const changeDiscount = ()=>{
        document.getElementById('discountdrop').classList.toggle('showedratings');
          setIcon(!icon)
      }
      
      const [icon , setIcon] = useState(true);

  return (
    <div className="wrapper">
      <div className="item" onClick={()=> changeDiscount()}>
        <span>DISCOUNT</span>
        <div className="changeIcon" style={{ display: 'inline-block',
    cursor: 'pointer',
    width: '2.1rem',
    height: '1.9rem'}} >
        {icon ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
        </div>
       </div>
      <div id='discountdrop' className='showratings'>
     < Content checkboxName='30% or more'/>
     < Content checkboxName='40% or more'/>
     < Content checkboxName='50% or more'/>
     < Content checkboxName='60% or more'/>
     < Content checkboxName='70% or more'/>
     
      </div>
    </div>
  )
}

export default Discount
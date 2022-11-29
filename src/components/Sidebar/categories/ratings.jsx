
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState } from 'react';
import './ratings.css';

import Content from '../../treeview/Content';




function Ratings() {

const changeRatings = ()=>{
  document.getElementById('ratingsdrop').classList.toggle('showedratings');
    setIcon(!icon)
}

const [icon , setIcon] = useState(true);



  return (
    <div className="wrapper">
      <div className="item" onClick={()=> changeRatings()}>
        <span>CUSTOMER RATINGS</span>
        <div className="changeIcon" style={{ display: 'inline-block',
    cursor: 'pointer',
    width: '2.1rem',
    height: '1.9rem'}} >
        {icon ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
        </div>
       </div>
      <div id='ratingsdrop' className='showratings'>
     < Content checkboxName='4 * & above'/>
     < Content checkboxName='3 * & above' />
      </div>
    </div>
  )
}

export default Ratings;
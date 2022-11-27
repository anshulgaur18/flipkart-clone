import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState } from 'react';
import './ratings.css';
import Content from '../../treeview/Content';

function Occasion() {

    const changeOccasion = ()=>{
        document.getElementById('occasiondrop').classList.toggle('showedratings');
          setIcon(!icon)
      }
      
      const [icon , setIcon] = useState(true);

  return (
    <div className="wrapper">
      <div className="item" onClick={()=> changeOccasion()}>
        <span>OCCASIONS</span>
        <div className="changeIcon" style={{ display: 'inline-block',
    cursor: 'pointer',
    width: '21px',
    height: '19px'}} >
        {icon ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
        </div>
       </div>
      <div id='occasiondrop' className='showratings'>
     < Content checkboxName='Casual'/>
     < Content checkboxName='Ethnic'/>
     < Content checkboxName='Formal'/>
     < Content checkboxName='Party'/>
     < Content checkboxName='Riding'/>
     < Content checkboxName='Sports'/>
     < Content checkboxName='Wedding'/>
      </div>
    </div>
  )
}

export default Occasion
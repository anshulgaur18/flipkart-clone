
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState } from 'react';
import Content from './Content';
import './Gendercheckbox.css'



function Gendercheckbox({header}) {

const treeview = ()=>{
  document.getElementById('drop').classList.toggle('show');
    setIcon(!icon)
}

const [icon , setIcon] = useState(true);



  return (
    <div >
      <div className="item" onClick={()=> treeview()}>
        <div className='spaan'>{header}</div>
        <div className="changeIcon" style={{ display: 'inline-block',
    cursor: 'pointer',
    width: '21px',
    height: '19px'}} >
        {icon ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
        </div>
       </div>
      <div id='drop' className='showContent'>
      <Content checkboxName='Men'/>
      <Content checkboxName='Women'/>
        {/* <div className="women">
        <input type="checkbox" style={{visibility: 'hidden',
    position: 'absolute'}}/>
        <div className="checkbox " ></div>
        <div className="type">
        <label>Women</label> */}
        </div>
        
        </div>
      
  )
}

export default Gendercheckbox;
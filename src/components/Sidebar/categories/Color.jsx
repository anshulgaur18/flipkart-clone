import React,{useState} from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Checkbox from '..//..//treeview/Checkbox';

function Color() {

    const [icon , setIcon] = useState(true);
    const changeColor = ()=>{
        document.getElementById('downcolor').classList.toggle('showediv');
        setIcon(!icon)
    }

  return (
    <div className="sidebar__sixthComponent">
    <div className="sidebar__sixthComponent1st" onClick={()=>changeColor()}>
      <div className="brand">Color</div>
      <div className="svg"  style={{ display: 'inline-block',
    cursor: 'pointer',
    width: '2.1rem',
    height: '1.9rem'}} >
      {icon ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
      </div>
    </div>
    <div id='downcolor'  className="showdiv" >
      
      
      < Checkbox Name='Beige'/>
      < Checkbox Name='Black'/>
      < Checkbox Name='Blue'/>                                                              
      < Checkbox Name='Bronze'/>
      < Checkbox Name='Brown'/>
      < Checkbox Name='Burgundy'/>
      <div className="sidebar__sixthComponent2nd2">
        <span>23 more</span>
      </div>
    </div>
  </div>
  )
}

export default Color
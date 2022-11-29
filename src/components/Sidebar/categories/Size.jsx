import React ,{useState} from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Checkbox from '../../treeview/Checkbox';
import './size.css';

function Size() {

    const [icon , setIcon] = useState(true);

    const changeIcon = ()=>{
      document.getElementById('sizedrop').classList.toggle('sizeshow');
      setIcon(!icon)
    }

  return (
    <div className='size'>
        <div className="size1st"  onClick={changeIcon}>
            <div style={{fontSize:'1.3rem' , fontWeight:'600' , fontFamily:'Roboto,Arial,sans-serif'}}>SIZE - UK/INDIA</div>
            <div className="svg"  style={{ display: 'inline-block',
    cursor: 'pointer',
    width: '2.1rem',
    height: '1.9rem'}} >
            {icon ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
            </div>
        </div>
        <div className="size2nd" id='sizedrop'>
            <div className="size2nd1">
                <Checkbox Name="2"/>
                <Checkbox Name="3"/>
                <Checkbox Name="4"/>
                <Checkbox Name="4.5"/>
                <Checkbox Name="5"/>
                <Checkbox Name="5.5"/>
            </div>
            <div className="size2nd2">
                <span>20 MORE</span>
            </div>
        </div>
    </div>
  )
}

export default Size
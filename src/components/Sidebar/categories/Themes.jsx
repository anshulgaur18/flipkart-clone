import React, {useState} from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import SearchIcon from '@mui/icons-material/Search';
import Checkbox from '..//..//treeview/Checkbox';


function Themes() {

    const [icon , setIcon] = useState(true);
    const changeTheme = ()=>{
        document.getElementById('downtheme').classList.toggle('showediv');
        setIcon(!icon)
      }

  return (
    <div className="sidebar__sixthComponent">
          <div className="sidebar__sixthComponent1st" onClick={()=>changeTheme()}>
            <div className="brand">Theme</div>
            <div className="svg"  style={{ display: 'inline-block',
    cursor: 'pointer',
    width: '21px',
    height: '19px'}}>
            {icon ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
            </div>
          </div>
          <div id='downtheme'  className="showdiv" >
            <div className="sidebar__sixthComponent2nd1">
              <div className="searchbrand">
              <SearchIcon style={{width: '17px',
    height: '20px',
    position: 'absolute',
    color: '#878787'}}/>
              <input type="text" placeholder='Search Theme' style={{width: '100%',
    borderWidth: '0 0 2px',
    borderColor: '#e0e0e0',
    height: '20px',
    fontSize: '14px',
    padding: '0 0 0 21px',
    color: '#878787',
    outline: 'none'}} />
              </div>
            </div>
            < Checkbox Name='Adustable Sneakers'/>
            < Checkbox Name='Ankle Boots'/>
            < Checkbox Name='NIKE'/>
            < Checkbox Name='Beach Flip Flops'/>
            < Checkbox Name='Beach Slides'/>
            < Checkbox Name='Canvas'/>
            <div className="sidebar__sixthComponent2nd2">
              <span>63 more</span>
            </div>
          </div>
        </div>
  )
}

export default Themes
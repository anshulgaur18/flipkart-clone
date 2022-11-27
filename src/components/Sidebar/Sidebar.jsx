import React, { useState } from 'react';
import './Sidebar.css';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import MultiSelectTreeView from '../Treeview';
import Gendercheckbox from '../treeview/Gendercheckbox';
import { Slider } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import SearchIcon from '@mui/icons-material/Search';
import Checkbox from '../treeview/Checkbox';
import Size from './categories/Size';
import Ratings from './categories/ratings';
import Availability from './categories/Availability';
import Discount from './categories/Discount';
import Offers from './categories/Offers';
import Themes from './categories/Themes';
import Occasion from './categories/Occasion';
import Color from './categories/Color';

function Sidebar() {

  // function valuetext(value) {
  //   return `${value}°C`;
  // }
  
  // export default function RangeSlider() {
    const [value, setValue] = React.useState([0,100 ]);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const [icon , setIcon] = useState(true);

    const changeIcon = ()=>{
      document.getElementById('down').classList.toggle('showediv');
      setIcon(!icon)
    }

  return (
    <div className='sidebar'>
      <div className="sidebar__components">
        <div className="sidebar__firstComponent">
            <span>Filters</span>
        </div>
        <div className="sidebar__secondComponent">
          <div className="sidebar__secondComponent1st">
            <span>CATEGORIES</span>
          </div>
          <div className="sidebar__secondComponent2nd">
             <span><KeyboardArrowLeftIcon style={{height:'17px' , width:'15px' ,display: 'inline-block',marginRight: '5px',cursor: 'pointer'}}/></span>
           <div className="sidebar__secondComponent2nd1st">
              <span>Footwear</span>
            </div>
            </div>
            <div className="sidebar__secondComponent3rd">
              <MultiSelectTreeView/>
            </div>
          </div>
        <div className="sidebar__thirdComponent">
          < Gendercheckbox header="Gender"/>
        </div>
        <div className="sidebar__fourthComponent">
          <div className="assured">
            <input type='checkbox' />
            <div className="fAssured">
              <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" alt="assured logo" />
            </div>
          </div>
          <div className="ques">
            <span className='question'>?</span>
          </div>
        </div>
        <div className="sidebar__fifthComponent">
          <div className="flexdiv">
            <div className="sidebar__fifthComponent1st">
            <span>Price</span>
          <div className="sidebar__fifthComponent2nd">
          <div className="shadowdiv">
          <div className="shadow"></div>
            <div className="shadow"></div>
            <div className="shadow"></div>
            <div className="shadow"></div>
            <div className="shadow"></div>
            <div className="shadow"></div>
          </div>
            </div>
          <div className="sidebar__fifthComponent3rd">
          <Slider
                getAriaLabel={() => 'Temperature range'}
                value={value}
                onChange={handleChange}
          />
          </div>
          <div className="sidebar__fifthComponent4th">
            <div className="dropdown">
              <form>
                <select className='select'>
                  <option value="min" className='amount'>Min</option>
                  <option value="500" className='amount'>500</option>
                  <option value="1000" className='amount'>1000</option>
                  <option value="1500" className='amount'>1500</option>
                  <option value="2000" className='amount'>2000</option>
                  <option value="3000" className='amount'>3000</option>
                </select>
              </form>
            </div>
            <div className="to">to</div>
            <div className="dropdown">
            <form>
                <select className='select'>
                  <option value="500" className='amount'>500</option>
                  <option value="1000" className='amount'>1000</option>
                  <option value="1500" className='amount'>1500</option>
                  <option value="2000" className='amount'>2000</option>
                  <option value="3000" className='amount'>3000</option>
                  <option value="min" className='amount'>3000+</option>
                </select>
              </form>
            </div>
          </div>
          </div>
          </div>
          </div>
        <div className="sidebar__sixthComponent">
          <div className="sidebar__sixthComponent1st" onClick={()=>changeIcon()}>
            <div className="brand">Brand</div>
            <div className="svg"  style={{ display: 'inline-block',
    cursor: 'pointer',
    width: '21px',
    height: '19px'}}>
            {icon ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
            </div>
          </div>
          <div id='down'  className="showdiv" >
            <div className="sidebar__sixthComponent2nd1">
              <div className="searchbrand">
              <SearchIcon style={{width: '17px',
    height: '20px',
    position: 'absolute',
    color: '#878787'}}/>
              <input type="text" placeholder='Search Brand' style={{width: '100%',
    borderWidth: '0 0 2px',
    borderColor: '#e0e0e0',
    height: '20px',
    fontSize: '14px',
    padding: '0 0 0 21px',
    color: '#878787',
    outline: 'none'}} />
              </div>
            </div>
            < Checkbox Name='PUMA'/>
            < Checkbox Name='ADIDAS'/>
            < Checkbox Name='NIKE'/>
            < Checkbox Name='WOODLAND'/>
            < Checkbox Name='REEBOK'/>
            < Checkbox Name='asics'/>
            <div className="sidebar__sixthComponent2nd2">
              <span>2765 more</span>
            </div>
          </div>
        </div>
        <div className="sidebar__seventhComponent">
          < Size/>
        </div>
        <div className="sidebar__eigththComponent">
          <Ratings/>
        </div>
        <div className="sidebar__ninethComponent">
          <Availability/>
        </div>
        <div className="sidebar__tenthComponent">
          < Discount/>
        </div>
        <div className="sidebar__eleventhComponent"><Offers/></div>
        <div className="sidebar__twelvethComponent"><Themes/></div>
        <div className="sidebar__thirteenthComponent"><Occasion/></div>
        <div className="sidebar__fourteenthComponent"><Color/></div>
      </div>
      </div>
    
  )
}

export default Sidebar;
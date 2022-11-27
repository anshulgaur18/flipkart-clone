import React from 'react';
import './content.css'

function Content({checkboxName}) {
  return (
    <div className="men">
      <input type="checkbox" style={{visibility: 'hidden',
    position: 'absolute'}}/>
        <div className="checkbox"></div>
        <div className="type"> <label>{checkboxName}</label>
        </div>
       </div>
  )
}

export default Content
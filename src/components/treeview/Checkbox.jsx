import React from 'react'

function Checkbox({Name}) {
  return (
    <div>
       <div className="checkboxItem">
              <div className="checkboxItemdiv">
              <label className='labl'>
              <input type="checkbox" style={{position: 'relative',
    width: '14px',
    height: '14px',
    backgroundColor: 'transparent',
    border: '1.4px solid #c2c2c2',
    borderRadius: '1.5px',
    boxSizing: 'border-box',
    display: 'inline-block',
    verticalAlign: 'middle',
    cursor: 'pointer'}}/>
                <div className='puma'>{Name}</div>
              </label>
            </div>
            </div> 
    </div>
  )
}

export default Checkbox;
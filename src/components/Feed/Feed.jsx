import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Home from '../Home/Home';
import './Feed.css'

function Feed() {
  return (
    <div className="feed">
        <Sidebar/>
        <Home/>
    </div>
  )
}

export default Feed
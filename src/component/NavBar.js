import React from 'react'
import List from './List.js'


class NavBar extends React.Component {
  render() {
    return (
    <nav className="absolute z-1 left-0 top-0 pl2 vh-100"
    style={{backgroundColor: '#2c3136', overflow: 'hidden', width: '200'}}>
      <ul className='mt5 list'>
        <List/>
        <List/>
        <List/>
      </ul>
    </nav>
    );
  }
}

export default NavBar

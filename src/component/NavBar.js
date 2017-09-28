import React from 'react'
import List from './List.js'


class NavBar extends React.Component {
  render() {
    return (
    <nav className="absolute z-1 left-0 top-1 vh-100"
    style={{width: '180'}}>
      <ul className='mt5 list pa0'>
        <List active='bg-black-10' icon='fa-home' color='red' title='overview'/>
        <List icon='fa-bars'  color='green' title='Stat'/>
        <List icon='fa-heart'  color='blue' title='Saved'/>
        <hr/>
      </ul>
    </nav>
    );
  }
}

export default NavBar

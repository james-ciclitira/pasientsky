import React from 'react'
import List from './List.js'


class NavBar extends React.Component {
  render() {
    return (
    <nav className="absolute z-1 left-0 top-0 w-20  pl2 vh-100"
    style={{backgroundColor: '#2c3136', overflow: 'hidden', minWidth: '200'}}>
      <ul>
        <li>Main</li>
        <List/>
        <List/>
      </ul>
      <ul>
        <li>Secondary</li>
        <List/>
        <List/>
          <a href="#0">Users</a>
        <List/>
      </ul>
    </nav>
    );
  }
}

export default NavBar

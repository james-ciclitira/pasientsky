import React from 'react'
import List from './List.js'


class NavBar extends React.Component {
  render() {
    return (
    <nav className="absolute z-1 left-0 top-1 vh-100"
    style={{width: '180px'}}>
      <ul className='mt4 pt4 list pa0'>
        <List icon='home' title='Dashboard'/>
        <List icon='face' title='Patients' active='active-tab'/>
        <List icon='store' title='Saved'/>
        <hr/>
      </ul>
    </nav>
    );
  }
}

export default NavBar

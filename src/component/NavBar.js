import React from 'react'
import List from './List.js'


class NavBar extends React.Component {
  render() {
    return (
    <nav className="absolute z-1 left-0 top-0 vh-100"
    style={{width: '180px'}}>
      <ul className='mt4 pt4 list pa0'>
        <List icon='home' title='Dashboard'/>
        <List icon='face' title='Patients' active='bg-black-05'/>
        <List icon='store' title='Saved'/>
        <hr/>
        <List icon='settings' title='Setting'/>
      </ul>
    </nav>
    );
  }
}

export default NavBar

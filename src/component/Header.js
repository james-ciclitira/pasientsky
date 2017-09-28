import React from 'react'


class Header extends React.Component {
  render() {
    return (
    <header className="absolute top-0 left-0 right-0 w-100 shadow-1" style={{Height:'56', zIndex: '22', backgroundColor: '#2c3136'}}>
    <a href="#0" className="fl db ml4 pl3 pr4 mt3 pt2 white link">PatientSky​</a>
    <div className="relative ma3">
      <form className='ml6 pl5'>
      <i className="fa fa-search pr3 white"></i>
        <input className='bg-transparent bn white pv2 fw3' type="search" placeholder="Search..."/>
      </form>
    </div>
  </header>
    );
  }
}

export default Header

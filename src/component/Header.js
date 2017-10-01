import React from 'react'


class Header extends React.Component {
  render() {
    return (
    <header className="absolute top-0 left-0 right-0 w-100 shadow-1"
    style={{height:'56px', zIndex: '22', backgroundColor: '#253238'}}>
    <div className='dib v-top pt3'>
    <i className="ml24 material-icons white v-mid dib ">menu</i>
    <a href="#0" className="ml24 dib link white v-mid">PatientSky​</a>
    </div>
    <div className="relative pt2 mt1 ml3 pl3 dib">
      <form className='pl2 relative'>
      <i className="material-icons pr3 white absolute"
      style={{top:'4px', left: '16px'}}
      >search</i>
      <input
      className='bg-transparent br3 bn white pv2 fw3 ' type="search" placeholder="Search..."
      style={{textIndent: '40px', width: '400px'}}
      />
      </form>
    </div>
  </header>
    );
  }
}

export default Header

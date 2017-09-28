import React from 'react'


class Header extends React.Component {
  render() {
    return (
    <header className="absolute top-0 left-0 right-0 w-100 bg-blue shadow-1" style={{Height:'56', zIndex: '22'}}>
    <a href="#0" className="fl db ml4 pl4 pr4 mt3 pt2 white link">Pasientsky</a>
    <div className="relative ma3">
      <form>
        <input type="search" placeholder="Search..."/>
      </form>
    </div>
  </header>
    );
  }
}

export default Header

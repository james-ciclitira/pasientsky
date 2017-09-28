import React from 'react'


class List extends React.Component {
  render() {
    return (
     <li className='list'>
          <a className='white link list' href="#0">Overview</a>
          <ul className='mv3 list pa2'>
            <li><a className='white-70 link' href="#0">All Data</a></li>
            <li><a className='white-70 link' href="#0">Category 1</a></li>
            <li><a className='white-70 link' href="#0">Category 2</a></li>
          </ul>
        </li>
    );
  }
}

export default List

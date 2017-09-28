import React from 'react'


class List extends React.Component {
  render() {
    return (
     <li>
          <a href="#0">Overview</a>
          <ul>
            <li><a href="#0">All Data</a></li>
            <li><a href="#0">Category 1</a></li>
            <li><a href="#0">Category 2</a></li>
          </ul>
        </li>
    );
  }
}

export default List

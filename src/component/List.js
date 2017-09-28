import React from 'react'


class List extends React.Component {
  render() {
    return (
    <a className={`black-80 link list pv3 db pl4  ${this.props.active}`} href="#0">
    <i className={`fa pr3
      ${this.props.color}
      ${this.props.icon}
      `}/>
      {this.props.title}
      </a>
    );
  }
}

export default List

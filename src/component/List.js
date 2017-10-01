import React from 'react'


class List extends React.Component {
  render() {
    return (
    <a className={`db pointer ${this.props.active}`} href='#0' style={{height:'56px'}}>
    <i className='material-icons black-30 ml24 mt16 dib v-top'>{this.props.icon}</i>
    <p className=' black-50 ml24 link list db mt16 v-mid pa0 dib pt1'>{this.props.title}</p>
    </a>
    );
  }
}

export default List

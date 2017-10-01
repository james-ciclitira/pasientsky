import React from 'react'


class List extends React.Component {
  render() {
    return (
    <a className='db' style={{height:'48px'}}>
    <i className='material-icons black-30 ml24 mt16 dib v-top'>{this.props.icon}</i>
    <p className=' black-50 ml24 link list db mt16 v-mid pa0 dib'>{this.props.title}</p>
    </a>
    );
  }
}

export default List

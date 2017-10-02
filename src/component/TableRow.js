import React from 'react'


class TableRow extends React.Component {


  render() {

    return (
          <tr className='pointer bordered'>
          <td className="pv3 pr3">
          <div className="overflow-hidden dib cover"
          style={{backgroundImage: 'url("images/user.jpg")', backgroundRepeat: 'no-repeat', height:'40px', width:'40px'}}>
          <img src={this.props.user}/>
          </div>
          <div className='dib v-top mt0 ml24'>
          <h1 className='mb0 f5  ma0'>{this.props.typeName}</h1>
          <p className='ma0 pa0 f7 black-60'>{this.props.id}</p>
          </div>
          </td>
          <td className="pv3 v-top">
          <a href='mailto:testmail.com' className='ma0 link black-60'>{this.props.email}</a>
          </td>
          <td className="pv3 v-top">
          <p className='ma0 black-60'>{this.props.dob}</p>
          </td>
          <td className="pv3 v-top">
          <a href='tel:07639583959' className='ma0 link black-60'>14419232532474</a>
          </td>
          <td className="pv3 v-top">
          <a className='ma0 blue'>PERSCRIPTIONS</a>
          </td>
        </tr>
    );
  }
}

export default TableRow


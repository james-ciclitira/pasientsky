import React from 'react'


class TableRow extends React.Component {


  render() {

    return (
          <tr className='pointer bordered'>
          <td className="pv3 pr3">
          <div className="overflow-hidden dib cover"
          style={{backgroundImage: 'url("images/user.jpg")', backgroundRepeat: 'no-repeat', height:'40px', width:'40px'}}>
          </div>
          <div className='dib v-top mt0 ml24'>
          <h1 className='mb0 f5  ma0'>{this.props.typeName}</h1>
          <p className='ma0 pa0 f7 black-60'>{this.props.id}</p>
          </div>
          </td>
          <td className="pv3 v-top">
          <p className='ma0'>Mike@companylongdomain.co</p>
          </td>
          <td className="pv3 v-top">
          <p className='ma0'>08/10/1985</p>
          </td>
          <td className="pv3 v-top">
          <p className='ma0'>14419232532474</p>
          </td>
          <td className="pv3 v-top">
          <a className='ma0 blue'>Prescriptions</a>
          </td>
        </tr>
    );
  }
}

export default TableRow


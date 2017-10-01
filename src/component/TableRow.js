import React from 'react'


class TableRow extends React.Component {


  render() {

    return (
        <tr className='pointer'>
          <td className="pv3 pr3">
          <p>{this.props.typeName}</p>
          </td>
          <td className="pv3 pr3">
          <p>@hassan</p>
          </td>
          <td className="pv3 pr3">
          <p>hassan@companywithalongdomain.co</p>
          </td>
          <td className="pv3 pr3">
          <p>14419232532474</p>
          </td>
        </tr>
    );
  }
}

export default TableRow


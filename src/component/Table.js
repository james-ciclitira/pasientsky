import React from 'react'
import TableRow from './TableRow.js'



class Table extends React.Component {
  render() {
    return (
 <div className="w-100 pv2 ph3 bg-white br2 b--black-10">
  <div className="overflow-auto">
    <table className="f6 w-100 mw8 center" cellspacing="0">
      <thead>
        <tr>
          <th className="fw6 tl pb3 pr3 bg-white">Name</th>
          <th className="fw6 tl pb3 pr3 bg-white">Email</th>
          <th className="fw6 tl pb3 pr3 bg-white">Date of birth</th>
          <th className="fw6 tl pb3 pr3 bg-white">Phone number</th>
        </tr>
      </thead>
      <tbody className="lh-copy">
        <TableRow typeName='Krever godkj. Fritak' id='BA4-BD75-86863262819D'/>
        <TableRow typeName='Krever godkj. Fritak' id='BA4-BD75-86863262819D'/>
        <TableRow typeName='Krever godkj. Fritak' id='BA4-BD75-86863262819D'/>
        <TableRow typeName='Krever godkj. Fritak' id='BA4-BD75-86863262819D'/>
        <TableRow typeName='Krever godkj. Fritak' id='BA4-BD75-86863262819D'/>
        <TableRow typeName='Krever godkj. Fritak' id='BA4-BD75-86863262819D'/>
        <TableRow typeName='Krever godkj. Fritak' id='BA4-BD75-86863262819D'/>
        <TableRow typeName='Krever godkj. Fritak' id='BA4-BD75-86863262819D'/>


      </tbody>
    </table>
  </div>
</div>


    );
  }
}

export default Table

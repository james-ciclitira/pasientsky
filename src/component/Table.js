import React from 'react'
import TableRow from './TableRow.js'



class Table extends React.Component {
  render() {
    return (
 <div className="w-100 pv2 ph3 bg-white">
  <div className="overflow-auto">
    <table className="f6 w-100 mw8 center" cellspacing="0">
      <thead>
        <tr>
          <th className="fw6 tl pb3 pr3 bg-white">Name</th>
          <th className="fw6 tl pb3 pr3 bg-white">Username</th>
          <th className="fw6 tl pb3 pr3 bg-white">Email</th>
          <th className="fw6 tl pb3 pr3 bg-white">ID</th>
        </tr>
      </thead>
      <tbody className="lh-copy">
        <TableRow typeName='Krever godkj. Fritak'/>
        <TableRow typeName='Krever godkj. Fritak'/>


      </tbody>
    </table>
  </div>
</div>


    );
  }
}

export default Table

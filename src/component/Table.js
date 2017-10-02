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
        <TableRow user='images/user1.jpg' typeName='Alice Hansen' email='Alicehansen@gmail.com' dob='08/10/1985' id='BA4-BD75-86863262819D'/>
        <TableRow user='images/user2.jpg' typeName='Max Larsen' email='MLarsen@gmail.com'  dob='12/02/1995' id='BA4-BD75-86863262819D'/>
        <TableRow user='images/user3.jpg' typeName='Mike Olsen' email='Olsen@outlook.com'  dob='16/06/1959' id='BA4-BD75-86863262819D'/>
        <TableRow user='images/user4.jpg' typeName='Adam Smith' email='adAdam@mail.com'  dob='22/05/1972' id='BA4-BD75-86863262819D'/>
        <TableRow user='images/user1.jpg' typeName='Alice Hansen' email='Alicehansen@gmail.com' dob='08/10/1985' id='BA4-BD75-86863262819D'/>
        <TableRow user='images/user2.jpg' typeName='Max Larsen' email='MLarsen@gmail.com'  dob='12/02/1995' id='BA4-BD75-86863262819D'/>
        <TableRow user='images/user3.jpg' typeName='Mike Olsen' email='Olsen@outlook.com'  dob='16/06/1959' id='BA4-BD75-86863262819D'/>
        <TableRow user='images/user4.jpg' typeName='Adam Smith' email='adAdam@mail.com'  dob='22/05/1972' id='BA4-BD75-86863262819D'/>
        <TableRow user='images/user1.jpg' typeName='Alice Hansen' email='Alicehansen@gmail.com' dob='08/10/1985' id='BA4-BD75-86863262819D'/>
        <TableRow user='images/user2.jpg' typeName='Max Larsen' email='MLarsen@gmail.com'  dob='12/02/1995' id='BA4-BD75-86863262819D'/>
        <TableRow user='images/user3.jpg' typeName='Mike Olsen' email='Olsen@outlook.com'  dob='16/06/1959' id='BA4-BD75-86863262819D'/>
        <TableRow user='images/user4.jpg' typeName='Adam Smith' email='adAdam@mail.com'  dob='22/05/1972' id='BA4-BD75-86863262819D'/>

      </tbody>
    </table>
  </div>
</div>


    );
  }
}

export default Table

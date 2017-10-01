import React from 'react'
import Link from 'gatsby-link'
import Header from '../component/Header'
import NavBar from '../component/NavBar'
import Card from '../component/Card'
import Table from '../component/Table'
import ReactTable from "react-table";
import "react-table/react-table.css";



const IndexPage = () => (

<div>
<Header/>
<NavBar/>
<Table/>
<ReactTable
          columns={[
            {
              Header: "Name",
              columns: [
                {
                  Header: "Name",
                  Footer: () =>
                    <div style={{ textAlign: "center" }}>Name</div>
                }
              ]
            },
            {
              Header: "Email",
              columns: [
                {
                  Header: "Email",
                  accessor: "Email",
                  Footer: () => <div style={{ textAlign: "center" }}>Email</div>
                }
              ]
            },
             {
              Header: "Date of Birth",
              columns: [
                {
                  Header: "Date of Birth",
                  accessor: "Date of Birth",
                  Footer: () => <div style={{ textAlign: "center" }}>Date of Birth</div>
                }
              ]
            },
                 {
              Header: "Phone number",
              columns: [
                {
                  Header: " Phone number",
                  accessor: "Phone number",
                  Footer: () => <div style={{ textAlign: "center" }}>Phone number</div>
                }
              ]
            },

            {
              Header: "Expand",
              columns: [
                {
                  expander: true,
                  Header: () => <strong>More</strong>,
                  width: 65,
                  Expander: ({ isExpanded, ...rest }) =>
                    <div>
                      {isExpanded
                        ? <span>&#x2299;</span>
                        : <span>&#x2295;</span>}
                    </div>,
                  style: {
                    cursor: "pointer",
                    fontSize: 25,
                    padding: "0",
                    textAlign: "center",
                    userSelect: "none"
                  },
                  Footer: () => <span>&hearts;</span>
                }
              ]
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
          SubComponent={() => <div style={{padding: '10px'}}>Hello</div>}
        />
</div>
)

export default IndexPage

import React from 'react'
import Link from 'gatsby-link'
import Header from '../component/Header'
import NavBar from '../component/NavBar'

const IndexPage = () => (

<div>
<Header/>
<NavBar/>


  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
  </div>
)

export default IndexPage

import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'


const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Pasientsky dashboard"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
      link={[
        {rel:'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'},
        ]}
    />
    <div
      style={{
        marginLeft: '180px',
        marginTop: '72px',
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

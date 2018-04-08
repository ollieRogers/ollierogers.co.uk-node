import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Ollie Rogers"
      meta={[
        { name: 'description', content: 'Designer and front end developer based in Bournemouth UK.' },
        { name: "apple-mobile-web-app-capable", content: "yes" },
        { name: "apple-mobile-web-app-status-bar-style", content: "black" },
        { name: "apple-mobile-web-app-title", content: "CW Loan Calc" },
        { rel: "apple-touch-icon", href: "/favicons/icon-152x152.png" },
        { rel: "apple-touch-icon", href: "/favicons/icon-152x152.png", sizes: "152x152" },
        { rel: "apple-touch-icon", href: "/favicons/icon-180x180.png", sizes: "180x180" },
      ]}
    >
      <html lang="en" />
    </Helmet>
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
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

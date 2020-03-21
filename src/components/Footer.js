import React from 'react'
import Icons from './Icons'

const Footer = () => {
  const date = new Date()
  const year = date.getFullYear()
  return (
    <div id="footer">
      <div className="inner">
        <Icons />
        <ul className="copyright">
          <li>Ollie Rogers</li>
          <li>{year}</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer

import React from 'react'
import DOMContainer from '../UICoponents/DOMContainer'

import CommonNavbar from '../UICoponents/CommonNavbar';
import './Footer.scss';

export default function Footer() {
  return (
    <DOMContainer className="footer">
        <div className='copyright'>
            <p>@ 2021, Made with ❤️ by Creative Tim & Simmmple for a better web</p>
        </div>
        <div className='footer-navbar'>
          <CommonNavbar link="Creative Tim"/>
          <CommonNavbar link="Simmmple"/>
          <CommonNavbar link="Blog"/>
          <CommonNavbar link="License"/>
        </div>
    </DOMContainer>
  )
}

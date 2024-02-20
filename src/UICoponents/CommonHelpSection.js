import React from 'react'
import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion } from '@fortawesome/free-solid-svg-icons'

import './CommonHelpSection.scss';

export default function CommonHelpSection() {
  return (
    <>
        <div className='help-main-section'>
            <FontAwesomeIcon icon={faQuestion} />
            <p>Need help?</p>
            <p>Please check our docs</p>
            <Button className="doc-link-btn" variant="primary"> DOCUMENTATION </Button>
        </div>
    </>
  )
}

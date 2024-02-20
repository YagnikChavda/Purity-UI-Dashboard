import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'

export default function BillingPaymentSection() {
    return (
        <>
            <div className='payment-method-wrapper'>
                <div className='payment-title-wrapper'>
                    <p className='billing-heading-title'> Payment Method </p>
                    <Button className="payment-btn" variant="primary"> ADD A NEW CARD </Button>
                </div>

                <div className='payment-options-wrapper'>
                    <Form className='payment-option-form'>
                        <Form.Group className="input-items" controlId="">
                            <FontAwesomeIcon icon={faCreditCard} />
                            <Form.Control type="text" placeholder="7812 2139 0823 XXXX" />
                            <FontAwesomeIcon className="icon-pen" icon={faPen} />
                        </Form.Group>

                        <Form.Group className="input-items" controlId="formBasicPassword">
                            <FontAwesomeIcon icon={faCreditCard} />
                            <Form.Control placeholder="7812 2139 0823 XXXX" />
                            <FontAwesomeIcon className="icon-pen" icon={faPen} />
                        </Form.Group>
                    </Form>
                </div>
            </div>
        </>
    )
}

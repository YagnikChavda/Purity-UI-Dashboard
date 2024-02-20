import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWallet } from '@fortawesome/free-solid-svg-icons'

import './CommonBillingBox.scss';

export default function CommonBillingBox(props) {
    return (
        <>
            <div className='box-details-wrapper'>
                <FontAwesomeIcon className='icon-wallet' icon={faWallet} />

                <div className='box-details'>
                    <p> {props.boxTitle} </p>
                    <span> {props.boxTax} </span>
                </div>

                <div className='box-amount'>
                    <p> +${props.boxAmount} </p>
                </div>
            </div>
        </>
    )
}

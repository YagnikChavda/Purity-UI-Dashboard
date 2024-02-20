import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWallet } from '@fortawesome/free-solid-svg-icons'

import './DashboardUIComponenet.scss';

export default function DashboardUIComponenet(props) {

    const className = "dashboard-box " + props.className;
    
    return (
        <div className={className} >
            <div className='content'>
                <p> {props.title}</p>
                <div className='amount'>
                    <span className=''> {props.amount}</span>
                    <span className='percentage'> {props.percentage}</span>
                </div>
            </div>
            <div className='icon'>
                <FontAwesomeIcon icon={faWallet} />
            </div>
        </div>
    )
}

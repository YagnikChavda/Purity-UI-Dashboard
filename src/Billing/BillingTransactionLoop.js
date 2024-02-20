import React, { useState } from 'react'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import styles from './Billingstyle.module.scss';



export default function BillingTransactionLoop(props) {

    const [isValid , setIsValid] = useState(true);
    
    const ListItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0 !important;
    padding: 10px !important;

    & p {
        color: ${props => props.$isValid ? "white" : "#BF4F74"};
        font-size: 14px;
        font-weight: 700;
        line-height: 1.1;
        margin: 0;
    }
`;

    return (
        <React.Fragment>
            <ListItem valid={ !isValid ? " valid" : "invalid"}>
                <div className='billing-transaction-details'>
                    <FontAwesomeIcon className={(props.transactionStatus)} icon={faArrowDown} />
                    <div className={styles.details}>
                        <p> {props.transactionName} </p>
                        <span>  {props.transactionTime} </span>
                    </div>
                </div>
                <div className='billing-transaction-amount'>
                    <p className={(props.transactionStatus)}> $ {props.transactionAmount} </p>
                </div>
            </ListItem>
        </React.Fragment>
    )
}

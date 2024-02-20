import React from 'react'
import BillingTransactionLoop from './BillingTransactionLoop';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileLines } from '@fortawesome/free-solid-svg-icons'

export default function BillingInvoiceSection(props) {

    const userTransaction = [
        { transactionId: "MS-415646", transactionName: "Netflix", transactionTime: "27 March 2020, at 12:30 PM", transactionStatus: "credit", transactionAmount: 2500 },
        { transactionId: "RV-126749", transactionName: "Apple", transactionTime: "27 March 2020, at 12:30 PM", transactionStatus: "debit", transactionAmount: 2500 },
        { transactionId: "FB-212562", transactionName: "Stripe", transactionTime: "26 March 2020, at 13:45 PM", transactionStatus: "credit", transactionAmount: 800 },
        { transactionId: "QW-103578", transactionName: "HubSpot", transactionTime: "26 March 2020, at 12:30 PM", transactionStatus: "debit", transactionAmount: 1700 },
        { transactionId: "AR-803481", transactionName: "Webflow", transactionTime: "26 March 2020, at 05:00 AM", transactionStatus: "pending", transactionAmount: 1500 },
        { transactionId: "YR-430046", transactionName: "Microsoft", transactionTime: "25 March 2020, at 16:30 PM", transactionStatus: "credit", transactionAmount: 987 },
    ]

    const TransactionsInvoiceloop = userTransaction.map((transaction, index) =>
        <li key={index} className='billing-transaction-invoice-item'>
            <div className='billing-transaction-invoice-details'>
                <div className='details'>
                    <p className='time'> {transaction.transactionTime} </p>
                    <span >  {transaction.transactionId} </span>
                </div>
                <div className='billing-transaction-amount'>
                    <p className='amount'> $ {transaction.transactionAmount} </p>
                    <a href="#"> <FontAwesomeIcon icon={faFileLines} /> PDF </a>
                </div>
            </div>
        </li>
    );

    return (
        <>
            <div className='Billing-invoice-wrapper'>
                <p className='billing-heading-title'> Invoices </p>
                  <ul className='Billing-invoice-items-wrapper'>
                    {TransactionsInvoiceloop}
                </ul>
            </div>
        </>
    )
}

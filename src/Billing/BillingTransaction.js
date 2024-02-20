import React, { useState } from 'react'

import BillingTransactionLoop from './BillingTransactionLoop'

export default function BillingTransaction() {

	const userTransaction = [
		{ transactionId: "MS-415646", transactionName: "Netflix", transactionTime: "27 March 2020, at 12:30 PM", transactionStatus: "credit", transactionAmount: 2500 },
		{ transactionId: "RV-126749", transactionName: "Apple", transactionTime: "27 March 2020, at 12:30 PM", transactionStatus: "debit", transactionAmount: 2500 },
		{ transactionId: "FB-212562", transactionName: "Stripe", transactionTime: "26 March 2020, at 13:45 PM", transactionStatus: "credit", transactionAmount: 800 },
		{ transactionId: "QW-103578", transactionName: "HubSpot", transactionTime: "26 March 2020, at 12:30 PM", transactionStatus: "debit", transactionAmount: 1700 },
		{ transactionId: "AR-803481", transactionName: "Webflow", transactionTime: "26 March 2020, at 05:00 AM", transactionStatus: "pending", transactionAmount: 1500 },
		{ transactionId: "YR-430046", transactionName: "Microsoft", transactionTime: "25 March 2020, at 16:30 PM", transactionStatus: "credit", transactionAmount: 987 },
	]

	const [valid,setValid] = useState(true);
	
	if (userTransaction[0].transactionId == 0) {
		setValid(false);
	}

	return (
		<>
			<div className='billing-transaction-wrapper'>
				<div className='billing-transaction-title'>
					<p style={{ color: !valid ? 'red' : 'black' }} className='billing-heading-title'> Your Transactions </p>
				</div>
				
				<ul className='billing-transaction-items-wrapper'>
					{userTransaction.map((transaction, key) => (
						<BillingTransactionLoop id={key} transactionName={transaction.transactionName} transactionTime={transaction.transactionTime} transactionStatus={transaction.transactionStatus} transactionAmount={transaction.transactionAmount} />
					))}
				</ul>
			</div>
		</>
	)
}

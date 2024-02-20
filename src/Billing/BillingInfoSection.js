import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'

export default function BillingInfoSection() {

	const userData = [
		{ username: "Oliver Liam", companyName: "Viking Burrito", emailAddress: "oliver@burrito.com", VATNumber: "FRB1235476" },
		{ username: "Max", companyName: "Viking", emailAddress: "max@burrito.com", VATNumber: "FRB1234576" },
		{ username: "Alex", companyName: "Burrito", emailAddress: "alex@burrito.com", VATNumber: "BYQ1234576" }
	]

	const userDataLoop = userData.map((data ,index) =>
		<li key={index} className='user-data-wrapper'>
			<div className='username-wrapper'>
				<p className='username'> {data.username}</p>
				<ul className='update-setings'>
					<li className='delete-option'> <a href="#"> <FontAwesomeIcon icon={faTrash} /> DELETE </a></li>
					<li className='edit-option'><a href="#">  <FontAwesomeIcon icon={faPen} />EDIT</a></li>
				</ul>
			</div>
			<div className='user-info-wrapper'>
				<p> Company Name: <span> {data.companyName}</span></p>
				<p> Email Address: <span> {data.emailAddress}</span></p>
				<p> VAT Number: <span> {data.VATNumber}</span></p>
			</div>
		</li>
	);

	return (
		<>
			<ul className='biling-info-item-wrapper'>
				<div className='billing-heading-title'>Billing Information</div>
				{userDataLoop}
			</ul>
		</>
	)
}

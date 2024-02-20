import React from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import CommonBillingBox from '../UICoponents/CommonBillingBox';
import './BillingMainContent.scss';
import BillingInfoSection from './BillingInfoSection';
import BillingPaymentSection from './BillingPaymentSection';
import BillingTransaction from './BillingTransaction';
import BillingInvoiceSection from './BillingInvoiceSection';
import CardDetails from './CardDetails';
import { CommonHeader } from '../UICoponents/CommonHeader';

export default function BillingMainContent() {
	return (
		<>
	        <CommonHeader pageTitle="Billing"/>

			<Row>
				<Col sm={8}>
					<Row className='billing-payment-section'>
						<Col sm={6}>
							< CardDetails />
						</Col>
						<Col sm={3}>
							< CommonBillingBox boxTitle="Salary" boxTax="Belong Interactive" boxAmount = "2000" />
						</Col>
						<Col sm={3}>
							< CommonBillingBox boxTitle="Paypal" boxTax="Freelance Payment" boxAmount = "455.00"/>
						</Col>

						<Col sm={12}>
							< BillingPaymentSection />
						</Col>
					</Row>
				</Col>
				<Col sm={4}>
					< BillingInvoiceSection />
				</Col>
			</Row>

			<Row>
				<Col sm={7}>
					<BillingInfoSection />
				</Col>
				<Col sm={5}>
					<BillingTransaction />
				</Col>
			</Row>
		</>
	)
}

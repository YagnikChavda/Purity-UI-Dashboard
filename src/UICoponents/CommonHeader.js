import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faGear, faUser ,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Form from 'react-bootstrap/Form';

import './CommonHeader.scss';

export const CommonHeader = (props) => {

	const [ headerOverlay, setHeaderOverlay] = useState(props.overlay);

	return (
		<>
			<div className={`common-header ${headerOverlay ? "white-text" : "" }`}>
				<div className='breadcrumbs'>
					<span> Pages </span>
					<span className='active'> {props.pageTitle} </span>
					<p className='title'> {props.pageTitle} </p>
				</div>
				<div className='links-wrapper'>
					<div className='search-block'>
						<Form>
							<Form.Group controlId="exampleForm.ControlInput1">
								<FontAwesomeIcon className='search-icon' icon={faMagnifyingGlass} />
								<Form.Control type="text" placeholder="Type here..." />
							</Form.Group>
						</Form>
					</div>
					<a href="/signin" className='signin-link'>
						<FontAwesomeIcon icon={faUser} />
						<span>Sign In</span>
					</a>
					<a href='#'><FontAwesomeIcon icon={faGear} /></a>
					<a href='#'><FontAwesomeIcon icon={faBell} /></a>
				</div>

			</div>
		</>
	)
}

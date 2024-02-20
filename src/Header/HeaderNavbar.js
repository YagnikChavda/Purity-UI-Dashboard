import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import PurityLogoBlack from '../Images/Logo-black.png';
import PurityLogoWhite from '../Images/Logo-white.png';
import DOMContainer from '../UICoponents/DOMContainer';
import CommonNavbar from '../UICoponents/CommonNavbar';

import './HeaderNavbar.scss';
import { useState } from 'react';

const HeaderNavbar = () => {

	const [headerClass, setHeaderClass] = useState("header-nav-bar ");
	const [purityLogo, setPurityLogo] = useState({PurityLogoWhite})
	
	setTimeout( window.addEventListener("scroll", () => {
		if (window.scrollY >= 100) {
			setHeaderClass("header-nav-bar full-width");
			setPurityLogo(PurityLogoBlack);
		}
		else {
			setHeaderClass("header-nav-bar ");
			setPurityLogo(PurityLogoWhite);
		}
	}), 3000);

	return (
		<DOMContainer className={headerClass} >
			<Navbar >
				<Navbar.Brand href="#home">
					<img src={PurityLogoBlack} />
				</Navbar.Brand>

				<div className='header-navbar-links'>
					<CommonNavbar link="dashboard" />
					<CommonNavbar link="profile" />
					<CommonNavbar link="sign up" />
					<CommonNavbar link="sign in" />
				</div>

				<Nav className="demo-btn">
					<Button variant="primary">Free Download</Button>
				</Nav>
			</Navbar>
		</DOMContainer>
	)
}

export default HeaderNavbar
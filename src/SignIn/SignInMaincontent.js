import React, { useContext, useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import ReactDOM from 'react-dom'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import rightBlockImage from '../Images/rightBlockImage.png'
import CommonShadowBox from '../UICoponents/CommonShadowBox'

import "./SignIn.scss";
import AuthContext from "../StoreContext/context-value";
import { Link } from "react-router-dom";

export default function SignInMaincontent() {

	const contextValue = useContext(AuthContext);
	
	const [isLogIn , setIsLogIn] = useState(false);
	const [loginText , setLoginText]= useState("");

	const activeClass = isLogIn ? "active":"";

	const LogoutHandler = () =>  {
		localStorage.setItem("isLoginValue" , "0");
		setIsLogIn(false);
	}

	const userLoginStorage = () => {
		const localStorageValue = localStorage.getItem("isLoginValue");
		
		if ( localStorageValue === "1" ) {
			setIsLogIn(true);
			setLoginText("You succesfully logged in");
		}
	}

	useEffect( userLoginStorage , [userLoginStorage , LogoutHandler] );
	
	/// get data on form using useRef () method 

	const userEmailRef = useRef();
	const userPasswordRef = useRef();

	/// get data on form using useState () method 

	const [emailValue,setEmailValue] = useState("");
	const [userPassword,setUserPassword] = useState("");
	
	const userEmailHandler = (e) => {
		setEmailValue(e.target.value);
	}

	const userPasswordHandler = (e) => {
		setUserPassword(e.target.value);
	}

	const signInFormSubmitHandler = (e) => {
		const userEmailRefValue = userEmailRef.current.value;
		const userPasswordRefValue = userPasswordRef.current.value;

		if ( emailValue === "test@gmail.com" && userPassword === "1234") {
			setIsLogIn(true);
			setLoginText("You succesfully logged in");
			localStorage.setItem("isLoginValue" , "1");
			console.log(isLogIn);
		}

		setEmailValue("");
		setUserPassword("");
		e.preventDefault();
	}

	const portalDestination =  document.getElementById("overlay-box");
	
	const OverlayBox = (props) => {
		return (
			<div className={`overlay-box-wrapper ${activeClass}`}>
				< CommonShadowBox className = "overlay-box">
					<h2> {loginText} </h2>
					<Button onClick={LogoutHandler}> Log out </Button>
				</CommonShadowBox>
			</div>
		)
	}

	return (
		<div className="sign-in-page-main">
			<Container className="left-block">
				<div className="title-wrapper">
					<h2> Welcome Back</h2>
					<p> Enter your email and password to sign in</p>
				</div>
				<div className="form-wrapper">
					<Form onSubmit={signInFormSubmitHandler}>
						<Form.Group className="input-items" controlId="formBasicEmail">
							<Form.Label>Email address</Form.Label>
							<Form.Control ref={userEmailRef} value={emailValue} onChange={userEmailHandler} type="email" placeholder="Your email address" required/>
						</Form.Group>

						<Form.Group className="input-items" controlId="formBasicPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control ref={userPasswordRef} value={userPassword} type="password" onChange={userPasswordHandler}  placeholder="Your password" required/>
						</Form.Group>
						<Form.Check type="switch" id="custom-switch" label="Remember me" defaultChecked/>
						<Button className="btn-submit" variant="primary" type="submit">
							SIGN IN
						</Button>
						<Form.Text className="sign-up-link">
							Don't have an account? <Link to="/signup">Sign up</Link>
						</Form.Text>
					</Form>
				</div>
			</Container>
			<div className="right-block">
				<img src={ rightBlockImage }/>
			</div>
			 
			{ ReactDOM.createPortal( <OverlayBox /> , portalDestination)}
			
		</div>
	);
}

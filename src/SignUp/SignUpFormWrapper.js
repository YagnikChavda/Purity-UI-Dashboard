import React from 'react';
import SignUpForm from './SignUpForm';

export default function SignUpFormWrapper() {
	return (
		<div className="form-wrapper">
			<div className='content-wrapper'>
				<h3>Register with</h3>
				<div className="link-block">
					<a className="links" href="#"> <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/b4f5583e7f726871f2f39ff9273f1107b59782cdbcddadbfde8042d05cf0cd64?" className="img" /></a>
					<a className="links" href="#"> <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a61bc318ab0d33a83f1f1fbe516dced99b882065b0ce7c6d8cd05654dcf0888?" className="img" /></a>
					<a className="links" href="#"> <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce59532165d1fd34eabc4294452ef2e81a3299ee8aedb2ed94c3a9613b7005bf?" className="img" /></a>
				</div>
			</div>
			<span>or</span>
			<SignUpForm />
		</div>
	)
}

import React from 'react'
import Header from '../Header/Header';
import SignInMaincontent from './SignInMaincontent';
import Footer from '../Footer/Footer';

export default function SignIn() {
	return (
		<div className='sign-in-page'>
			<Header />
			<SignInMaincontent />
			<Footer />
		</div>
	)
}

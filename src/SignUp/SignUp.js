import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SignUpMaincontent from './SignUpMaincontent';
import Authentication from './Authentication';

export default function SignUp() {
  return (
    <div className='sign-up-page'>
      <Header />
      < SignUpMaincontent />
      <Footer />
    </div>
  )
}

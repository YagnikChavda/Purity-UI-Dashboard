import React from 'react';
import './SignUpMaincontent.scss';
import SignUpFormWrapper from './SignUpFormWrapper';

export default function SignUpMaincontent() {
  return (
    <div className='sign-up-content'>
        < div className='title-wrapper' >
            <div className='title'>
                <h2>Welcome!</h2>
                <p>Use these awesome forms to login or create new account in your project for free.</p> 
            </div>
        </ div>

        < SignUpFormWrapper />
    </div>  
  )
}

import React from 'react'
import CommonShadowBox from '../UICoponents/CommonShadowBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-solid-svg-icons'

  
export default function ProfileInfo(props) {

    const userData = [
        { userID : 1 , userName : "Alec M. Thompson" , userNumber : "  (44) 123 1234 123",  userEmail : "alecthompson@mail.com " , userCountry : "United States"},
        { userID : 2 , userName : "Alec M. Thompson" ,  userNumber : "  (44) 123 1234 123", userEmail : "alecthompson@mail.com " , userCountry : "United States"},
        { userID : 3 , userName : "Alec M. Thompson" ,  userNumber : "  (44) 123 1234 123", userEmail : "alecthompson@mail.com " , userCountry : "United States"},
        { userID : 4 , userName : "Alec M. Thompson" ,  userNumber : "  (44) 123 1234 123", userEmail : "alecthompson@mail.com " , userCountry : "United States"}
    ]

    return (
        <CommonShadowBox className="profile-info-wrapper">
            <h4 className='title'>Profile Information</h4>
            <p className='user-decription'>Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).</p>
            <ul className='user-data-items'>
                <li> Full Name: <span> {userData[0].userName} </span></li>
                <li> Mobile:  <span> {userData[0].userNumber} </span></li>
                <li>Email: <span> {userData[0].userEmail} </span></li>
                <li>Location: <span> {userData[0].userCountry} </span></li>
                <li>Social Media:
                    {/* <a href="#"><FontAwesomeIcon className='icon-edit' icon={faFacebook} /></a>
                    <a href="#"><FontAwesomeIcon className='icon-edit' icon={faInstagram} /></a>
                    <a href="#"><FontAwesomeIcon className='icon-edit' icon={faTwitter} /></a> */}
                </li>
            </ul>
        </CommonShadowBox>
    )
}

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'

import CommonShadowBox from '../UICoponents/CommonShadowBox';
import userImage from '../Images/user-image.png'

import './UserProfileData.scss';
import ProfileInfo from './ProfileInfo';

export default function UserProfileData() {

    const userName = "Esthera Jackson";
    const userEmail = "esthera@simmmple.com";

    return (
        <>
            < CommonShadowBox className="user-profile-wrapper">
                 <div className='user-profile'>  
                    <div className='user-image'>
                        <img src={userImage} />
                        <a href="#"><FontAwesomeIcon className='icon-edit' icon={faPen} /></a>
                    </div>
                    <div className='user-details'>
                        <p className='user-name'> {userName} </p>
                        <p className='user-email'> {userEmail} </p>
                    </div>
                </div>
                <ul className='user-profile-settings'>
                    <li><a href="#"> OVERVIEW </a></li>
                    <li><a href="#"> TEAMS </a></li>
                    <li><a href="#"> PROJECTS </a></li>
                </ul>
            </CommonShadowBox>
        </>
    )
}

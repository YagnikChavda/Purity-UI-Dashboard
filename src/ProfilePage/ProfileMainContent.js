import React from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import UserProfileData from './UserProfileData'
import ProfileSettings from './ProfileSettings'
import ProfileInfo from './ProfileInfo';
import UserConversations from './UserConversations';
import UserProjects from './UserProjects';

import './ProfilePage.scss'
import bgImage from '../Images/Background (2).png'
import { CommonHeader } from '../UICoponents/CommonHeader';

export default function ProfileMainContent() {
    return (
        <div className="profile-page">
            <div className='img-background'>
                <CommonHeader overlay={true} pageTitle="Profile" />
                <img src={bgImage} />
            </div>
            <UserProfileData />
            <Row>
                <Col sm={4}>
                    < ProfileSettings />
                </Col>
                <Col sm={4}>
                    < ProfileInfo />
                </Col>
                <Col sm={4}>
                    < UserConversations />
                </Col>
                <Col sm={12}>
                    < UserProjects />
                </Col>
            </Row>

        </div>
    )
}

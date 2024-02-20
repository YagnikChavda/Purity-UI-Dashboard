import React from 'react'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimney , faChartSimple ,faCreditCard , faUser , faFile , faUserPlus} from '@fortawesome/free-solid-svg-icons'

import MainDashboard from '../MainDashboard/MainDashboard'
import BlackLogo from '../Images/Logo-black.png'
import BillingMainContent from '../Billing/BillingMainContent'
import CommonHelpSection from './CommonHelpSection';
import { Link } from "react-router-dom";
import ProfileMainContent from '../ProfilePage/ProfileMainContent';

import './SideBar.scss'

export default function SideBar() {
    return (
        <div className='sidebar'>
            <Tab.Container id="left-tabs-example" defaultActiveKey="sidebar-content-1">
                <Row>
                    <Col sm={2}>
                        <div className='sidebar-logo'>
                            <Nav.Link > <img src={BlackLogo} /> </Nav.Link>
                        </div>
                        <div className='sidebar-tab'>
                            <div className='sidebar-content-tabs'>
                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item>
                                        <Nav.Link className='tab-links' eventKey="sidebar-content-1">
                                            <FontAwesomeIcon icon={faHouseChimney} />Dashboard
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className='tab-links' eventKey="sidebar-content-2">
                                            <FontAwesomeIcon icon={faChartSimple} /> Billing
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className='tab-links' eventKey="sidebar-content-3">
                                            <FontAwesomeIcon icon={faCreditCard} /> Profile
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                            <div className='account-content-tabs'>
                                <p className='title'> ACCOUNT PAGES </p>

                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item>
                                        <Nav.Link className='tab-links' as={Link} to="/signin">
                                            <FontAwesomeIcon icon={faFile} /> Sign In
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className='tab-links' as={Link} to="/signup">
                                            <FontAwesomeIcon icon={faUserPlus} /> Sign Up
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                            < CommonHelpSection />
                        </div>
                    </Col>
                    <Col sm={10}>
                        <Tab.Content>
                            <Tab.Pane eventKey="sidebar-content-1"> <MainDashboard /> </Tab.Pane>
                            <Tab.Pane eventKey="sidebar-content-2"> < BillingMainContent /> </Tab.Pane>
                            <Tab.Pane eventKey="sidebar-content-3"> <ProfileMainContent /> </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    )
}

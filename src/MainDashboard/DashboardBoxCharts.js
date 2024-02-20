import React from 'react'
import StoreViewChart from '../UICoponents/StoreViewChart'
import UserChartView from '../UICoponents/UserChartView'
import { Col, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWallet } from '@fortawesome/free-solid-svg-icons'
import ProgressBar from 'react-bootstrap/ProgressBar';

export const DashboardBoxCharts = () => {
    return (
        <>
            <Row>
                <Col className="my-3" sm={5}>
                    <div className="div project-box user-chart-wrapper">
                        <UserChartView />
                        <div className='active-user'>
                            <h5> Active Users </h5>
                            <p class="title-wrapper"> <span class="percentage"> +30% </span> this month</p>
                        </div>

                        <div className="user-details-wrapper">
                            <div className='user-details'>
                                <ul>
                                    <li>
                                        <div className='icon-wrapper'>
                                            <FontAwesomeIcon className='icon' icon={faWallet} />
                                            Users
                                        </div>
                                        <p className='usere-number'> 32,984</p>
                                        <div className='project-progress'><ProgressBar now="45" /></div>
                                    </li>
                                    <li>
                                        <div className='icon-wrapper'>
                                            <FontAwesomeIcon className='icon' icon={faWallet} />
                                            Clicks
                                        </div>
                                        <p className='usere-number'> 2,42m</p>
                                        <div className='project-progress'><ProgressBar now="80" /></div>
                                    </li>
                                    <li>
                                        <div className='icon-wrapper'>
                                            <FontAwesomeIcon className='icon' icon={faWallet} />
                                            Sales
                                        </div>
                                        <p className='usere-number'> 2400$</p>
                                        <div className='project-progress'><ProgressBar now="35" /></div>
                                    </li>
                                    <li>
                                        <div className='icon-wrapper'>
                                            <FontAwesomeIcon className='icon' icon={faWallet} />
                                            Items
                                        </div>
                                        <p className='usere-number'> 320</p>
                                        <div className='project-progress'><ProgressBar now="50" /></div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Col>

                <Col sm={7}>
                    <StoreViewChart />
                </Col>
            </Row>
        </>
    )
}

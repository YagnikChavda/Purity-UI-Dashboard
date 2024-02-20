import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import ProgressBar from 'react-bootstrap/ProgressBar';


export default function DashboardProjectList() {

    const progressBarWidth = "60";
    
    return (
        <>
            <Row className="mt-3">
                <Col sm={7}>
                    <div className='project-box project-list-wrapper'>
                        <h5>Projects</h5>
                        <p>30 done this month</p>
                        <div className='project-list'>
                            <div>
                                <Table responsive="sm">
                                    <thead>
                                        <tr>
                                            <th>COMPANIES</th>
                                            <th>MEMBERS</th>
                                            <th>BUDGET</th>
                                            <th>COMPLETION</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className='project-title'>Chakra Soft UI Version</td>
                                            <td> <a href='#'> See all </a></td>
                                            <td className='project-cost'>$14,000</td>
                                            <td className='project-progress'> <span> {progressBarWidth} % </span><ProgressBar now={progressBarWidth} /></td>

                                            
                                        </tr>
                                        <tr>
                                            <td className='project-title'>Chakra Soft UI Version</td>
                                            <td> <a href='#'> See all </a></td>
                                            <td className='project-cost'>$14,000</td>
                                            <td className='project-progress'> <span> {progressBarWidth} % </span><ProgressBar now={progressBarWidth} /></td>
                                        </tr>
                                        <tr>
                                            <td className='project-title'>Chakra Soft UI Version</td>
                                            <td> <a href='#'> See all </a></td>
                                            <td className='project-cost'>$14,000</td>
                                            <td className='project-progress'> <span> {progressBarWidth} % </span><ProgressBar now={progressBarWidth} /></td>
                                        </tr>
                                        <tr>
                                            <td className='project-title'>Chakra Soft UI Version</td>
                                            <td> <a href='#'> See all </a></td>
                                            <td className='project-cost'>$14,000</td>
                                            <td className='project-progress'> <span> {progressBarWidth} % </span><ProgressBar now={progressBarWidth} /></td>
                                        </tr>
                                        <tr>
                                            <td className='project-title'>Chakra Soft UI Version</td>
                                            <td> <a href='#'> See all </a></td>
                                            <td className='project-cost'>$14,000</td>
                                            <td className='project-progress'> <span> {progressBarWidth} % </span><ProgressBar now={progressBarWidth} /></td>
                                        </tr>
                                        <tr>
                                            <td className='project-title'>Chakra Soft UI Version</td>
                                            <td> <a href='#'> See all </a></td>
                                            <td className='project-cost'>$14,000</td>
                                            <td className='project-progress'> <span> {progressBarWidth} % </span><ProgressBar now={progressBarWidth} /></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col sm={5}>
                    <div className='project-box project-order-wrapper'>
                        <h5>Orders overview</h5>
                        <p className='title-wrapper'> <span className='percentage'> +30% </span> this month</p>
                        <ul className='project-order'> 
                            <li className='project-order-item'> 
                                <p>$2400, Design changes</p>
                                <span>22 DEC 7:20 PM</span>
                            </li>
                            <li className='project-order-item'> 
                                <p>$2400, Design changes</p>
                                <span>22 DEC 7:20 PM</span>
                            </li>
                            <li className='project-order-item'> 
                                <p>$2400, Design changes</p>
                                <span>22 DEC 7:20 PM</span>
                            </li>
                            <li className='project-order-item'> 
                                <p>$2400, Design changes</p>
                                <span>22 DEC 7:20 PM</span>
                            </li>
                            <li className='project-order-item'> 
                                <p>$2400, Design changes</p>
                                <span>22 DEC 7:20 PM</span>
                            </li>
                            <li className='project-order-item'> 
                                <p>$2400, Design changes</p>
                                <span>22 DEC 7:20 PM</span>
                            </li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </>
    )
}

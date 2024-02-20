import React from 'react';

import projectBoxImage from '../Images/ProjectImage.png'
import { Col, Row } from 'react-bootstrap';

export default function DashboardBoxProjectsRow() {
    return (
        <>
            <Row>
                <Col sm={7}>
                    <div className='project-box'>
                        <div className='content'>
                            <div className='content-wrapper'>
                                <span>Built by developers</span>
                                <h5>Purity UI Dashboard</h5>
                                <p>From colors, cards, typography to complex elements,
                                    you will find the full documentation.
                                </p>
                            </div>
                            <a className='link' href='#'>Read more</a>
                        </div>
                        <div className='image'>
                            <img src={projectBoxImage} />
                        </div>
                    </div>
                </Col>

                <Col sm={5}>
                    <div className='project-box img-section'>
                        < div className=' img-bg'>
                            <div className='content-wrapper'>
                                <h5>Work with the Rockets</h5>
                                <p>
                                    Wealth creation is an evolutionarily recent positive-sum game.
                                    It is all about who take the opportunity first.
                                </p>
                            </div>
                            <a className='link' href='#'>Read more</a>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}

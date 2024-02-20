import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Project1 from '../Images/project1.png'
import Project2 from '../Images/Project2.png'
import Project3 from '../Images/Project3.png'
import CommonShadowBox from '../UICoponents/CommonShadowBox'


export default function UserProjects() {
    return (
        <CommonShadowBox className="user-projects" >
            <h4 className='title'> Projects </h4>
            <p>Architects design houses</p>
            <Row>
                <Col sm={3}>
                    <Card>
                        <div className='img-section'>
                            <Card.Img src={Project1} />
                        </div>
                        <Card.Body>
                            <Card.Title>Modern </Card.Title>
                            <Card.Text>As Uber works through a huge amount of internal management turmoil.</Card.Text>
                            <Card.Link className='btn' href="#"> VIEW ALL </Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={3}>
                    <Card>
                        <div className='img-section'>
                            <Card.Img src={Project2} />
                        </div>
                        <Card.Body>
                            <Card.Title>Modern </Card.Title>
                            <Card.Text>As Uber works through a huge amount of internal management turmoil.</Card.Text>
                            <Card.Link className='btn' href="#"> VIEW ALL </Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={3}>
                    <Card>
                        <div className='img-section'>
                            <Card.Img src={Project3} />
                        </div>
                        <Card.Body>
                            <Card.Title>Modern </Card.Title>
                            <Card.Text>As Uber works through a huge amount of internal management turmoil.</Card.Text>
                            <Card.Link className='btn' href="#"> VIEW ALL </Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={3}>
                    <Card className='empty-card'>
                        <Card.Link href="#" >Create a New Project </Card.Link>
                    </Card>
                </Col>
            </Row>

        </CommonShadowBox>
    )
}   

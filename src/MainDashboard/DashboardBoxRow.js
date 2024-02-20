import React from 'react'
import { Col, Row } from 'react-bootstrap'

import DashboardUIComponenet from '../UICoponents/DashboardUIComponenet'
    
export default function DashboardBoxRow() {
  return (
    <>
        <Row>
            <Col sm={3}>
                <DashboardUIComponenet title="Today’s Money" amount= "$53,000" percentage="+55%"/>
            </Col>
            <Col sm={3}>
                <DashboardUIComponenet title="Today’s Users" amount= "2,300" percentage="+5%"/>
            </Col>
            <Col sm={3}>
                <DashboardUIComponenet title="New Clients" amount= "+3,052" percentage="-14%"/>
            </Col>
            <Col sm={3}>
                <DashboardUIComponenet title="Total Sales" amount= "$173,000" percentage="+8%"/>
            </Col>
        </Row>
    </>
  )
}

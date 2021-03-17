import React from 'react'
import {Image,Col,Row} from 'react-bootstrap'

function Featured() {
    return (
        <>
        <div style={{height:80}}></div>
        <div className="text-center title">Featured Brands</div>
        <div style={{height:20}}></div>
        <Row>
            <Col>
                <Image src="https://static-my.zacdn.com/cms/2020/CW6/PONEY/K/DESKTOP_B1.jpg" className="banner"/>
            </Col>
            <Col>
                <Image src="https://static-my.zacdn.com/cms/dy/2020/CW14-GAP-K-DESKTOP_B1.jpg" className="banner"/>
            </Col>
            <Col>
                <Image src="https://static-my.zacdn.com/cms/2020/CW12/KIDS/PUMA/CW27EOSS-PUMA-JUNE30-K-B1.jpg" className="banner"/>
            </Col>
        </Row>
        <div style={{height:20}}></div>
        <Row>
            <Col>
                <Image src="https://static-my.zacdn.com/cms/dy/2020/CW42/MELISSA/K/DESKTOP_B1.jpg" className="banner"/>
            </Col>
            <Col>
                <Image src="https://static-my.zacdn.com/cms/DY/2020/CW43-OVSBABY-DESKTOP_B1.jpg" className="banner"/>
            </Col>
            <Col>
                <Image src="https://static-my.zacdn.com/cms/DY/2020/CW43-MANGO0KIDS-DESKTOP_B1.jpg" className="banner"/>
            </Col>
        </Row>   
        <div style={{height:20}}></div>
        <div className="d-flex justify-content-center align-content-center">
        <div className="btn-outline">{'See More Brands >'}</div>
        </div>            

        </>
    )
}

export default Featured

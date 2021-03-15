import React from 'react'
import {Container,Image,Col,Row} from 'react-bootstrap'
function Main() {
    return (
        <>
            <Container>
                <div style={{height:30}}></div>
                <Image src="https://static-my.zacdn.com/cms/2021/CW12/Buy230off/K/DESKTOP_Hero.jpg" className="banner"/>
                <div style={{height:20}}></div>
                <Image src="https://static-my.zacdn.com/cms/2021/CW11/ZNOW/K/DESKTOP_Fat_Skinny.jpg" className="banner"/>
                <div style={{height:20}}></div>
                <Row>
                    <Col>
                        <Image src="https://static-my.zacdn.com/cms/kids/kids_baby_filter_v2.jpg" className="banner"/>
                    </Col>
                    <Col>
                        <Image src="https://static-my.zacdn.com/cms/kids/kids_filter_v3.jpg" className="banner"/>
                    </Col>
                    <Col>
                        <Image src="https://static-my.zacdn.com/cms/kids/kids_junior_filter_v3.jpg" className="banner"/>
                    </Col>
                </Row>
            </Container> 
        </>
    )
}

export default Main

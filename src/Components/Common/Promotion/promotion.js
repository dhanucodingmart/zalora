import React from 'react'
import {Image,Col,Row} from 'react-bootstrap'

function promotion() {
    return (
        <div className="d-none d-md-block">
        <div style={{height:80}}></div>
        <div className="text-center title">Promotion And Deals</div>
        <div style={{height:20}}></div>
        <Row>
            <Col>
                <Image src="https://static-my.zacdn.com/cms/DY/2020/CW33-W-PROMOTION_&_DEALS_Banner.jpg" className="banner"/>
            </Col>
            <Col>
                <Image src="https://static-my.zacdn.com/cms/DY/2020/CW33-W-SELL_WITH_US_Banner.jpg" className="banner"/>
            </Col>
            <Col>
                <Image src="https://static-my.zacdn.com/cms/DY/2020/CW33-M-THREAD_MAGAZINE_Banner.jpg" className="banner"/>
            </Col>
        </Row>      
        </div>
    )
}

export default promotion

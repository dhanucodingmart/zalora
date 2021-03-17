import React from 'react'
import {Image,Col,Row} from 'react-bootstrap'

function Arrived() {
    return (
        <>
            {/* JUST ARRIVED SECTION */}
            <div style={{height:80}}></div>
            <div className="text-center title mb-1">Just Arrived</div>
            <div style={{height:20}}></div>
            <Row>
                <Col xs={4}>
                    <div className="position-relative">
                        <Image src="https://static-my.zacdn.com/cms/2021/CW12/NA19/K/DESKTOP_N1.jpg" style={{height:'423px'}} className="banner"/>
                        <div className="position-absolute justarrived-card d-flex justify-content-center align-content-center w-100 p-3 pb-5">
                            <div className="bg-white w-100 p-3">
                                <div className="headline">Kids New Arrivals From RM19</div>
                                <div className="subline">Prep for play this season with these budget-friendly picks.</div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="position-relative">
                        <Image src="https://static-my.zacdn.com/cms/2021/CW12/StyleU129/K/DESKTOP_N2.jpg" style={{height:'423px'}} className="banner"/>
                        <div className="position-absolute justarrived-card d-flex justify-content-center align-content-center w-100 p-3 pb-5">
                            <div className="bg-white w-100 p-3">
                                <div className="headline">SUSTAINABLE STYLES UNDER RM129</div>
                                <div className="subline">Make the conscious choice with these sustainably-created picks.</div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default Arrived

import React from 'react'
import {Image,Col,Row} from 'react-bootstrap'

function Trending() {
    return (
        <>
            {/* Trending now SECTION */}
            <div style={{height:100}}></div>
            <div className="text-center title mb-1">Trending Now</div>
            <div style={{height:20}}></div>
            <Row>
                <Col>
                    <div className="position-relative">
                        <Image src="https://static-my.zacdn.com/cms/2021/CW11/RecomendedBrand/K/DESKTOP_N2.jpg" style={{height:'423px'}} className="banner"/>
                        <div className="position-absolute justarrived-card d-flex justify-content-center align-content-center w-100 p-3 pb-5" style={{left:'0px'}}>
                            <div className="bg-white w-100 p-3">
                                <div className="headline">BRAND FAVORITES FOR KIDS FROM 20% OFF</div>
                                <div className="subline">Prep for play this season with these budget-friendly picks.</div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xs={4}>
                    <div className="position-relative">
                        <Image src="https://static-my.zacdn.com/cms/2021/CW11/Sneaker60/K/DESKTOP_N1.jpg" style={{height:'423px'}} className="banner"/>
                        <div className="position-absolute justarrived-card d-flex justify-content-center align-content-center w-100 p-3 pb-5">
                            <div className="bg-white w-100 p-3">
                                <div className="headline">KICKS FOR KIDS UP TO 60% OFF</div>
                                <div className="subline">Make the conscious choice with these sustainably-created picks.</div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="pt-4">
                <Col xs={4}>
                    <div className="position-relative">
                        <Image src="https://static-my.zacdn.com/cms/2021/CW11/Outfitlittleboy/K/DESKTOP_N1.jpg" style={{height:'423px'}} className="banner"/>
                        <div className="position-absolute justarrived-card d-flex justify-content-center align-content-center w-100 p-3 pb-5">
                            <div className="bg-white w-100 p-3">
                                <div className="headline">BOYS’ APPAREL UNDER RM99</div>
                                <div className="subline">Prep for play this season with these budget-friendly picks.</div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col >
                    <div className="position-relative">
                        <Image src="https://static-my.zacdn.com/cms/2021/CW11/DressesJumpsuits/K/DESKTOP_N2.jpg" style={{height:'423px'}} className="banner"/>
                        <div className="position-absolute justarrived-card d-flex justify-content-center align-content-center w-100 p-3 pb-5">
                            <div className="bg-white w-100 p-3">
                                <div className="headline">KIDS DRESSES & JUMPSUITS UNDER RM99</div>
                                <div className="subline">Make the conscious choice with these sustainably-created picks.</div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default Trending

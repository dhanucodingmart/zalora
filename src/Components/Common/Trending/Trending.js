import React from 'react'
import {Image,Col} from 'react-bootstrap'

function Trending() {
    return (
        <>
            {/* Trending now SECTION */}
            <div style={{height:60}} className="d-none d-md-block"></div>
            <div style={{height:10}} ></div>
            <div className="text-center title mb-1 d-none d-md-block">Trending Now</div>
            <div className="text-center title mb-1 text-uppercase d-block d-md-none">Trending Now</div>
            <div style={{height:10}} className="d-none d-md-block"></div>
            <div style={{height:10}}></div>
            <div className="row" style={{width:'100%',margin:0}}>
                <Col xs={12} md={8} className="mb-2">
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
                <Col xs={12} md={4} className="mb-2">
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
            </div>
            <div className="row pt-4" style={{width:'100%',margin:0}}>
                <Col xs={12} md={4} className="mb-2">
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
                <Col xs={12} md={8} className="mb-2">
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
            </div>
        </>
    )
}

export default Trending

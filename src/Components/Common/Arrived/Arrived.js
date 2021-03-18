import React from 'react'
import {Image} from 'react-bootstrap'

function Arrived() {
    return (
        <>
            {/* JUST ARRIVED SECTION */}
            <div style={{height:60}} className="d-none d-md-block"></div>
            <div style={{height:10}} ></div>
            <div className="text-center title mb-1 d-none d-md-block">Just Arrived</div>
            <div className="text-center title mb-1 text-uppercase d-block d-md-none">Just Arrived</div>
            <div style={{height:10}} className="d-none d-md-block"></div>
            <div style={{height:10}}></div>
            <div className="row" style={{width:'100%',margin:0}}>
                <div className="col-12 col-sm-12 col-md-4 mb-2">
                    <div className="position-relative">
                        <Image src="https://static-my.zacdn.com/cms/2021/CW12/NA19/K/DESKTOP_N1.jpg" style={{height:'423px'}} className="banner"/>
                        <div className="position-absolute justarrived-card d-flex justify-content-center align-content-center w-100 p-3 pb-5">
                            <div className="bg-white w-100 p-3">
                                <div className="headline">Kids New Arrivals From RM19</div>
                                <div className="subline">Prep for play this season with these budget-friendly picks.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-8 mb-2">
                    <div className="position-relative">
                        <Image src="https://static-my.zacdn.com/cms/2021/CW12/StyleU129/K/DESKTOP_N2.jpg" style={{height:'423px'}} className="banner"/>
                        <div className="position-absolute justarrived-card d-flex justify-content-center align-content-center w-100 p-3 pb-5">
                            <div className="bg-white w-100 p-3">
                                <div className="headline">SUSTAINABLE STYLES UNDER RM129</div>
                                <div className="subline">Make the conscious choice with these sustainably-created picks.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Arrived

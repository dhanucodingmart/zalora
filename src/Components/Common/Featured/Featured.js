import React from 'react'
import {Image,Col} from 'react-bootstrap'

function Featured() {
    return (
        <>
        <div style={{height:60}} className="d-none d-md-block"></div>
        <div style={{height:10}} ></div>
        <div className="text-center title mb-1 d-none d-md-block">Featured Brands</div>
        <div className="text-center title mb-1 text-uppercase d-block d-md-none">Featured Brands</div>
        <div style={{height:10}} className="d-none d-md-block"></div>
        <div style={{height:10}}></div>
        <div className="row" style={{width:'100%',margin:0}}>
            <Col>
                <Image src="https://static-my.zacdn.com/cms/2020/CW6/PONEY/K/DESKTOP_B1.jpg" className="banner"/>
            </Col>
            <Col>
                <Image src="https://static-my.zacdn.com/cms/dy/2020/CW14-GAP-K-DESKTOP_B1.jpg" className="banner"/>
            </Col>
            <Col>
                <Image src="https://static-my.zacdn.com/cms/2020/CW12/KIDS/PUMA/CW27EOSS-PUMA-JUNE30-K-B1.jpg" className="banner"/>
            </Col>
        </div>
        <div style={{height:20}}></div>
        <div className="row" style={{width:'100%',margin:0}}>
            <Col>
                <Image src="https://static-my.zacdn.com/cms/dy/2020/CW42/MELISSA/K/DESKTOP_B1.jpg" className="banner"/>
            </Col>
            <Col>
                <Image src="https://static-my.zacdn.com/cms/DY/2020/CW43-OVSBABY-DESKTOP_B1.jpg" className="banner"/>
            </Col>
            <Col>
                <Image src="https://static-my.zacdn.com/cms/DY/2020/CW43-MANGO0KIDS-DESKTOP_B1.jpg" className="banner"/>
            </Col>
        </div>   
        <div style={{height:20}}></div>
        <div className="d-flex justify-content-center align-content-center">
        <div className="btn-outline">{'See More Brands >'}</div>
        </div>            

        </>
    )
}

export default Featured

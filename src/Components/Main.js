import React, { useState } from 'react'
import {Container,Image,Col,Row,Carousel} from 'react-bootstrap'
function Main() {
    const [best_sellers] = useState([
        {img:'https://dynamic.zacdn.com/Em1-9VcXC79sKEby1n4eyysBoMQ=/fit-in/224x327/filters:quality(95):fill(ffffff)/http://static.my.zalora.net/p/gap-6600-8217142-1.jpg',title:`ADIDAS`,subtitle:'rapidazen i sneakers',price:'RM 199.00'},
        {img:'https://dynamic.zacdn.com/wieWLaoCN43etqhaZTR4BpmQVnQ=/fit-in/224x327/filters:quality(95):fill(ffffff)/http://static.my.zalora.net/p/koton-3554-0776642-1.jpg',title:`COL`,subtitle:'rapidazen i sneakers',price:'RM 199.00'},
        {img:'https://dynamic.zacdn.com/WPmHuM8ySGGujKbfmSF2SLiVKEI=/fit-in/224x327/filters:quality(95):fill(ffffff)/http://static.my.zalora.net/p/gap-7138-8755932-1.jpg',title:`KOTON`,subtitle:'rapidazen i sneakers',price:'RM 199.00'},
        {img:'https://dynamic.zacdn.com/JafH-kRQMx7fSCtAhuUtbHcYrZs=/fit-in/224x327/filters:quality(95):fill(ffffff)/http://static.my.zalora.net/p/timberland-3227-2041922-1.jpg',title:`PUMA`,subtitle:'rapidazen i sneakers',price:'RM 199.00'},
        {img:'https://dynamic.zacdn.com/m8CU8gSFoOq8uW9WQDTGLqK56zI=/fit-in/224x327/filters:quality(95):fill(ffffff)/http://static.my.zalora.net/p/teepeeto-0992-1356112-1.jpg',title:`MANGO`,subtitle:'rapidazen i sneakers',price:'RM 199.00'},
        {img:'https://dynamic.zacdn.com/NGxp4x-nUQHgb-9zjFccqN3ll08=/fit-in/224x327/filters:quality(95):fill(ffffff)/http://static.my.zalora.net/p/birkenstock-0739-1858142-1.jpg',title:`ADIDAS`,subtitle:'rapidazen i sneakers',price:'RM 199.00'},
        {img:'https://dynamic.zacdn.com/4Z99HdBad2Kfg7vbAWYUDjobGEA=/fit-in/224x327/filters:quality(95):fill(ffffff)/http://static.my.zalora.net/p/gap-2767-5851432-1.jpg',title:`PUMA`,subtitle:'rapidazen i sneakers',price:'RM 199.00'},
        {img:'https://dynamic.zacdn.com/fq_5CiwrjtawJSWcrBOiB9AVz18=/fit-in/224x327/filters:quality(95):fill(ffffff)/http://static.my.zalora.net/p/electro-denim-lab-9038-9115442-1.jpg',title:`ADIDAS`,subtitle:'rapidazen i sneakers',price:'RM 199.00'},
    ])



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

                <h1 className="text-center mt-5 pt-5 mb-3">Best Sellers</h1>

                <Carousel fade>
                    {
                        best_sellers.map((d,i)=>{
                            if(i%4 === 0 && (i+4)<=best_sellers.length){
                                return(
                                    <Carousel.Item key={i}>
                                        <Row>
                                            <Col>
                                                <Image src={best_sellers[i].img} className="banner"/>
                                                <div className="text-center caurosel-text">
                                                    <p className="carousel_title font-weight-bold text-uppercase">{best_sellers[i].title}</p>
                                                    <p className="carousel_subtitle text-capitalize">{best_sellers[i].subtitle}</p>
                                                    <p className="carousel_price text-uppercase">{best_sellers[i].price}</p>
                                                </div>
                                            </Col>
                                            <Col>
                                                <Image src={best_sellers[i+1].img} className="banner"/>
                                                <div className="text-center caurosel-text">
                                                    <p className="carousel_title font-weight-bold text-uppercase">{best_sellers[i+1].title}</p>
                                                    <p className="carousel_subtitle text-capitalize">{best_sellers[i+1].subtitle}</p>
                                                    <p className="carousel_price text-uppercase">{best_sellers[i+1].price}</p>
                                                </div>
                                            </Col>
                                            <Col>
                                                <Image src={best_sellers[i+2].img} className="banner"/>
                                                <div className="text-center caurosel-text">
                                                    <p className="carousel_title font-weight-bold text-uppercase">{best_sellers[i+2].title}</p>
                                                    <p className="carousel_subtitle text-capitalize">{best_sellers[i+2].subtitle}</p>
                                                    <p className="carousel_price text-uppercase">{best_sellers[i+2].price}</p>
                                                </div>
                                            </Col>
                                            <Col>
                                                <Image src={best_sellers[i+3].img} className="banner"/>
                                                <div className="text-center caurosel-text">
                                                    <p className="carousel_title font-weight-bold text-uppercase">{best_sellers[i+3].title}</p>
                                                    <p className="carousel_subtitle text-capitalize">{best_sellers[i+3].subtitle}</p>
                                                    <p className="carousel_price text-uppercase">{best_sellers[i+3].price}</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Carousel.Item>                                    
                                )
                            }else{
                                return null
                            }
                        })
                    }
                </Carousel>

            <div style={{height:50}}></div>

            </Container> 
        </>
    )
}

export default Main

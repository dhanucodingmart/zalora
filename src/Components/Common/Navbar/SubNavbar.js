import React, { useState } from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import './SubNavbar.css'
function SubNavbar() {
    const [state] = useState([
        'New in',
        'Baby',
        'Girls',
        'Boys',
        'clothing',
        'shoes',
        'accessories',
        'sports',
        'modest wears',
        'brands'
    ])
    const [dropshow,setdropshow] = useState(null)
    const [dropdata] = useState({
        'New in':{
            'New in':['CLOTHING','SHOES','ACCESSORIES','SPORTS','MODEST WEAR'],
            'New brand':['DEFACTO','MOSCHINO BABY KID TEEN','KENZO KIDS']
        },
        'Baby':{
            'baby ( 0 - 2 Years )':['CLOTHING','ACCESSORIES','SHOES'],
        },
        'Girls':{
            'kids ( 3 - 7 years )':['CLOTHING','ACCESSORIES'],
            'juniors ( 8 - 12 years )':['CLOTHING','ACCESSORIES'],
        },
        'Boys':{
            'kids ( 3 - 7 years )':['CLOTHING','ACCESSORIES'],
            'juniors ( 8 - 12 years )':['CLOTHING','ACCESSORIES'],
        },
        'clothing':{
            'Boys':['rompers'],
            'girls':['tops','dresses','sleepwear'],
            'brands':["MANGO KIDS","ADIDAS","FOX KIDS & BABY","COTTON ON KIDS","GUESS","KOTON","OVS",
            "ABERCROMBIE & FITCH","BABYBOL","MANGO BABY","NIKE","UNDER ARMOUR","JOJO MAMAN BEBE"],
        },
        'shoes':{
            'Boys':['rompers'],
            'girls':['saree','dresses','sleepwear'],
            'brands':["GAP","MANGO KIDS","ADIDAS","FOX KIDS & BABY","COTTON ON KIDS","GUESS","KOTON","OVS",
            "ABERCROMBIE & FITCH","BABYBOL","MANGO BABY","NIKE","UNDER ARMOUR","JOJO MAMAN BEBE"],
        },
        'accessories':{
            'Boys':['watch'],
            'girls':['lipsticks','dresses','sleepwear'],
            'brands':["ADIDAS","FOX KIDS & BABY","COTTON ON KIDS","GUESS","KOTON","OVS",
            "ABERCROMBIE & FITCH","BABYBOL","MANGO BABY","NIKE","UNDER ARMOUR","JOJO MAMAN BEBE"],
        },
        'sports':{
            'Boys':['adidas'],
            'girls':['shoes','dresses','sleepwear'],
            'brands':["GAP","MANGO KIDS","ADIDAS","FOX KIDS & BABY","COTTON ON KIDS","GUESS","KOTON","OVS",
            "ABERCROMBIE & FITCH","BABYBOL","MANGO BABY","NIKE","UNDER ARMOUR","JOJO MAMAN BEBE"],
        },
        'modest wears':{
            'Boys':['rompers'],
            'girls':['tops','dresses','sleepwear'],
            'brands':["FOX KIDS & BABY","COTTON ON KIDS","GUESS","KOTON","OVS",
            "ABERCROMBIE & FITCH","BABYBOL","MANGO BABY","NIKE","UNDER ARMOUR","JOJO MAMAN BEBE"],
        },
        'brands':{
            'Boys':['rompers'],
            'girls':['tops','dresses','sleepwear'],
            'brands':["GAP","MANGO KIDS","ADIDAS","FOX KIDS & BABY","COTTON ON KIDS","GUESS","KOTON","OVS",
            "ABERCROMBIE & FITCH","BABYBOL","MANGO BABY","NIKE","UNDER ARMOUR","JOJO MAMAN BEBE"],
        },
    })
    const [dropsetdata, setdropsetdata] = useState(null)
    return (
        <>
        <div className="subNavbar">
            <div className="subNavbar-wrap">
                <div className="subnav-items">
                    {
                        state.map((d,i)=>(<div
                            onMouseEnter={(e)=>{
                                setdropsetdata(dropdata[e.target.innerHTML])
                                setdropshow(e.target.innerHTML)
                                document.getElementById('main').classList.add('low-brightness')
                            }}
                            onMouseLeave={()=>{
                                setdropshow(null)
                                document.getElementById('main').classList.remove('low-brightness')
                            }}
                             key={i} className="subnav-item">{d}</div>))
                    }
                </div>
            </div>
            {
                dropshow &&
                <div className="drop">
                    <div className="fluid pt-4 pb-4">
                        <Row className="top-title" style={{textTransform:'uppercase',fontSize:'0.9rem'}}>
                            <Col>
                                <Row>
                                    {
                                        (dropsetdata && (!['New in','Boys','Girls','Baby'].includes(dropshow))) &&
                                        <>
                                        {
                                            dropsetdata['Boys'] &&
                                            <Col>
                                                <div className="seo-title mb-4" style={{color:'black'}}>
                                                    Boys
                                                </div>
                                                <hr/>
                                                {dropsetdata['Boys'].map((d,i)=>(<div key={i}>{d}</div>))}
                                            </Col>
                                        }
                                        {
                                            dropsetdata['girls'] &&
                                            <Col>
                                                <div className="seo-title mb-4" style={{color:'black'}}>
                                                    girls
                                                </div>
                                                <hr/>
                                                {dropsetdata['girls'].map((d,i)=>(<div key={i}>{d}</div>))}
                                            </Col>
                                        }
                                        {
                                            dropsetdata['brands'] &&
                                            <Col>
                                                <div className="seo-title mb-4" style={{color:'black'}}>
                                                    brands
                                                </div>
                                                <hr/>
                                                {dropsetdata['brands'].map((d,i)=>(<div key={i}>{d}</div>))}
                                            </Col>
                                        }
                                        </>
                                    }
                                    {
                                        (dropsetdata && dropshow === 'New in') &&
                                        <>
                                        {
                                            dropsetdata['New in'] &&
                                            <Col>
                                                <div className="seo-title mb-4" style={{color:'black'}}>
                                                    New in
                                                </div>
                                                <hr/>
                                                {dropsetdata['New in'].map((d,i)=>(<div key={i}>{d}</div>))}
                                            </Col>
                                        }
                                        {
                                            dropsetdata['New brand'] &&
                                            <Col>
                                                <div className="seo-title mb-4" style={{color:'black'}}>
                                                    New brand
                                                </div>
                                                <hr/>
                                                {dropsetdata['New brand'].map((d,i)=>(<div key={i}>{d}</div>))}
                                            </Col>
                                        }
                                        </>
                                    }
                                    {
                                        (dropsetdata && dropshow === 'Baby') &&
                                        <>
                                        {
                                            dropsetdata['baby ( 0 - 2 Years )'] &&
                                            <Col>
                                                <div className="seo-title mb-4" style={{color:'black'}}>
                                                    baby ( 0 - 2 Years )
                                                </div>
                                                <hr/>
                                                {dropsetdata['baby ( 0 - 2 Years )'].map((d,i)=>(<div key={i}>{d}</div>))}
                                            </Col>
                                        }
                                        </>
                                    }
                                    {
                                        (dropsetdata && (dropshow === 'Girls' || dropshow === 'Boys')) &&
                                        <>
                                        {
                                            dropsetdata['kids ( 3 - 7 years )'] &&
                                            <Col>
                                                <div className="seo-title mb-4" style={{color:'black'}}>
                                                    kids ( 3 - 7 years )
                                                </div>
                                                <hr/>
                                                {dropsetdata['kids ( 3 - 7 years )'].map((d,i)=>(<div key={i}>{d}</div>))}
                                            </Col>
                                        }
                                        {
                                            dropsetdata['juniors ( 8 - 12 years )'] &&
                                            <Col>
                                                <div className="seo-title mb-4" style={{color:'black'}}>
                                                    juniors ( 8 - 12 years )
                                                </div>
                                                <hr/>
                                                {dropsetdata['juniors ( 8 - 12 years )'].map((d,i)=>(<div key={i}>{d}</div>))}
                                            </Col>
                                        }
                                        </>
                                    }

                                </Row>
                            </Col>
                            <Col>
                                <div className="seo-title mb-4" style={{color:'black'}}>
                                    shop by range
                                </div>
                                <hr/>
                                <Row>
                                    <Col>
                                        <Image src="https://static-my.zacdn.com/cms/dropdown/K_Shoes_Baby.jpg" className="banner"/>                                    
                                        <div style={{height:10}}></div>
                                        <Image src="https://static-my.zacdn.com/cms/dropdown/K_Shoes_Kid.jpg" className="banner"/>                                    
                                        <div style={{height:10}}></div>
                                        <Image src="https://static-my.zacdn.com/cms/dropdown/K_Shoes_Junior.jpg" className="banner"/>                                    
                                    </Col>
                                    <Col>
                                        <Image style={{height:'100%'}} src="https://static-my.zacdn.com/cms/dropdown/K_Shoes_New_Arrivals.jpg" className="banner"/>                                    
                                    </Col>
                                    <Col>
                                        <Image style={{height:'100%'}} src="https://static-my.zacdn.com/cms/dropdown/K_Sneakers.jpg" className="banner"/>                                    
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                    </div>

                </div>
            }
        </div>
        </>
    )
}

export default SubNavbar

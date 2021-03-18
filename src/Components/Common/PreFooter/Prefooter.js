import React from 'react'
import {Col,Row} from 'react-bootstrap'
function Prefooter() {
    return (
        <>
            <div className="d-block d-md-none p-3 mt-5">
                <div>
                    <div className="seo-title mb-4">
                        SHOP KIDS FASHION NOW AT ZALORA MALAYSIA
                    </div>
                    <div className="seo-subtitle">
                        All parents would know the joy they get from seeing their little one grow up, day by day. And one of the joys of being a parent also comes up dressing up your kid; it’s like being your kid’s personal fashion stylist. Today, children’s clothes are somewhat reminiscent to that of adult fashion wear, just that it’s the mini version. Here at ZALORA Malaysia, we have a wide variety of kids fashion items for both your boys and girls to enjoy. With a huge palette of colours to choose from, you and your child will be spoilt for choices. Our shoes are stylishly cute – they reflect the season’s most coveted kids shoe trends adorned with the most adored cartoon characters of children. For girls, they have a lot more variety to choose from. From flowers to ribbons to buckles, they can also choose from the different types of shoes such as flats, wedges, sandals, slippers, loafers, Mary Janes and sneakers.
                    </div>
                </div>
            </div>
            <div className="d-block d-md-none mt-2">
                <div className="d-flex justify-content-around mt-5">
                    <div>
                        Contact
                    </div>
                    <div>
                        About
                    </div>
                    <div>
                        Login
                    </div>
                </div>
                <hr/>
                <div className="d-flex justify-content-around mt-2">
                    <div>
                        FAQ
                    </div>
                    <div>
                        Terms and Conditions
                    </div>
                    <div>
                        policy
                    </div>
                </div>
                <hr/>
                <div className="d-flex justify-content-center mt-2">
                    <div className="font-weight-bold">
                        change to desktop version
                    </div>
                </div>
                <hr/>    
            </div>

            <div className="fluid d-none d-md-block">
                <div style={{height:70}}></div>
                <Row>
                    <Col>
                        <div style={{paddingRight:'70px'}}>
                            <div className="seo-title mb-4">
                                SHOP KIDS FASHION NOW AT ZALORA MALAYSIA
                            </div>
                            <div className="seo-subtitle">
                                All parents would know the joy they get from seeing their little one grow up, day by day. And one of the joys of being a parent also comes up dressing up your kid; it’s like being your kid’s personal fashion stylist. Today, children’s clothes are somewhat reminiscent to that of adult fashion wear, just that it’s the mini version. Here at ZALORA Malaysia, we have a wide variety of kids fashion items for both your boys and girls to enjoy. With a huge palette of colours to choose from, you and your child will be spoilt for choices. Our shoes are stylishly cute – they reflect the season’s most coveted kids shoe trends adorned with the most adored cartoon characters of children. For girls, they have a lot more variety to choose from. From flowers to ribbons to buckles, they can also choose from the different types of shoes such as flats, wedges, sandals, slippers, loafers, Mary Janes and sneakers.
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div style={{paddingLeft:'70px'}}>
                            <div className="seo-title mb-4">
                                BUY KIDS CLOTHING ONLINE TODAY!
                            </div>
                            <div className="seo-subtitle">
                                With a wide variety of local and international brands, you can be sure you are paying for both style and quality to dress up your kids with latest fashion trends! Our kids clothing are fashionably age appropriate too and our kids sports collection is perfect for the active lifestyle of your child. This is the age where they just can’t seem to sit still. Whether they are running, walking, jumping or dancing, our sports collection is what they need as comfortability level is definitely important. We know shopping at a mall with your kid could be a little tough since they just can’t stay still for you to try an item on them which makes you stressful at times. But with the solution of online shopping, you can grab your kids clothing online from various brands right here at ZALORA. Shopping for your child has never been so convenient.
                            </div>
                        </div>
                    </Col>
                </Row>
                <div style={{height:70}}></div>
                <Row className="top-title">
                    <Col>
                        <div>
                            <div className="seo-title mb-4">
                                Top Brands
                            </div>
                            <Row>
                                <Col>
                                    {['ADIDAS','ALDO','Birkenstock','Calvin Klein','Coach']
                                    .map((d,i)=>(<div key={i}>{d}</div>))}                                
                                </Col>
                                <Col>
                                    {['Cotton On','Dorothy Perkins','ESPIRIT','FitFlop','Fossil']
                                    .map((d,i)=>(<div key={i}>{d}</div>))}
                                </Col>
                                <Col>
                                    {['GAP','Guess','Levi','Lubna','Mango']
                                    .map((d,i)=>(<div key={i}>{d}</div>))}                                
                                </Col>
                            </Row>
                            <Row className="mt-5">
                                <Col>
                                    {['Something Borrowed','Superdry','Tomy Hilfiger','TOPSHOP','Under Armour']
                                    .map((d,i)=>(<div key={i}>{d}</div>))}                                
                                </Col>
                                <Col>
                                    {['VANS','Zaila','ZALIA BASICS','ZALORA','ZALORA BASICS']
                                    .map((d,i)=>(<div key={i}>{d}</div>))}
                                </Col>
                                <Col>
                                    {['NH','Nike','PANDORA','PUMA','Rubi']
                                    .map((d,i)=>(<div key={i}>{d}</div>))}                                
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <div className="seo-title mb-4">
                                Top Searches
                            </div>
                            <Row>
                                <Col>
                                    {['Baju','Beauty','Dress Muslimah','clothes','Modest Wear']
                                    .map((d,i)=>(<div key={i}>{d}</div>))}                                
                                </Col>
                                <Col>
                                    {['Long Sleeve','New Products','Baju Muslimah','Lace Dress','Mysale']
                                    .map((d,i)=>(<div key={i}>{d}</div>))}                                                                
                                </Col>
                                <Col>
                                    {['Kurta','Sports','Bags','Pants','Skirt']
                                    .map((d,i)=>(<div key={i}>{d}</div>))}                                                                
                                </Col>
                            </Row>
                            <Row className="mt-5">
                                <Col>
                                    {['Accessories','Instant','Sandals','Heels','Wallet']
                                    .map((d,i)=>(<div key={i}>{d}</div>))}                                
                                </Col>
                                <Col>
                                    {['Wedges','Socks','Maternity','Sneakers','Baju']
                                    .map((d,i)=>(<div key={i}>{d}</div>))}                                                                
                                </Col>
                                <Col>
                                    {['Baju','12.12 Male','Blazer','Shoes','Long Dress']
                                    .map((d,i)=>(<div key={i}>{d}</div>))}                                                                
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
                <div style={{height:50}}></div>
                <hr style={{margin:'0px 150px'}}/>
                <div style={{height:70}}></div>
                <Row>
                    <Col>
                        <div className="seo-title mb-4" style={{color:'black',letterSpacing:'0px'}}>
                            A Company by
                        </div>          
                        <img style={{width:'70%'}} alt="Global fashion group"
                        src="https://upload.wikimedia.org/wikipedia/de/thumb/7/73/Global_Fashion_Group_logo.svg/1199px-Global_Fashion_Group_logo.svg.png"/>          
                    </Col>
                    <Col>
                        <div className="seo-title mb-4" style={{color:'black',letterSpacing:'0px'}}>
                            Our locations
                        </div>
                        <div>
                        <img  alt="Global fashion group"
                        src="/flags.png"/>          
                        </div>
                    </Col>
                    <Col>
                        <div className="seo-title mb-4" style={{color:'black',letterSpacing:'0px'}}>
                            Secure payment
                        </div>                    
                        <img  alt="Global fashion group"
                        src="/cards.png"/>          
                    </Col>
                    <Col>
                        <div className="seo-title mb-4" style={{color:'black',letterSpacing:'0px'}}>
                            Delivery Providers
                        </div>
                        <img  alt="Global fashion group"
                        src="/prov.png"/>          
                    </Col>
                    <Col></Col>
                    <Col>
                        <div className="seo-title mb-4" style={{color:'black',letterSpacing:'0px'}}>
                            Security system
                        </div>         
                        <div className="top-title" style={{color:'black'}}> 
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" className="bi bi-check" viewBox="0 0 16 16">
                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                                </svg>
                                PCI Security Standards
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" className="bi bi-check" viewBox="0 0 16 16">
                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                                </svg>
                                Card Holder Protection
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" className="bi bi-check" viewBox="0 0 16 16">
                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                                </svg>
                                Encrypted Network
                            </div>
                        </div>           
                    </Col>
                </Row>
                <div style={{height:30}}></div>
            </div>   
        </>
    )
}

export default Prefooter

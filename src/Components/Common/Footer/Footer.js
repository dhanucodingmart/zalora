import React from 'react'
import { Col } from 'react-bootstrap'
import './Footer.css'
function Footer() {
    return (
		<>
        <div className='main__footer d-none d-md-block'>
        <div className="fluid">
			<div className='main__content'>
				<div className='section__1'>


                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 154 21" className="logo zalora_logo">
                            <polygon points="18.523,1.054 18.518,0.265 0.719,0.265 0.719,1.93 15.282,1.93 0,20.07 0,20.735 18.626,20.735 18.626,19.07 3.248,19.07"></polygon>
                            <path d="M36.263,0.118l-9.709,20.617h2.081l3.269-6.956h9.838l3.269,6.956h2.081L37.383,0.118H36.263z M40.963,12.114h-8.281l4.126-8.833L40.963,12.114z"></path>
                            <polygon points="58.669,0.265 56.686,0.265 56.686,20.735 68.87,20.735 68.87,19.07 58.669,19.07   "></polygon>
                            <path d="M88.688,0c-6.217,0-11.087,4.612-11.087,10.5c0,5.888,4.87,10.5,11.087,10.5 c6.251,0,11.147-4.612,11.147-10.5C99.836,4.612,94.939,0,88.688,0z M88.749,19.188c-5.071,0-9.044-3.816-9.044-8.688 c0-4.872,3.973-8.688,9.044-8.688c5.037,0,8.983,3.816,8.983,8.688C97.732,15.372,93.786,19.188,88.749,19.188z"></path>
                            <path d="M119.743,10.567c2.457-0.985,3.702-2.642,3.702-4.93c0-3.363-2.628-5.371-7.031-5.371h-5.487v20.469h1.983 v-9.638h2.596c2.432,0,3.181,0.348,5.592,4.042l3.658,5.597h2.33l-4.854-7.242C121.318,12.157,120.58,11.136,119.743,10.567z M112.909,1.93h3.171c3.392,0,5.26,1.327,5.26,3.736c0,2.428-1.846,3.765-5.199,3.765h-3.231V1.93z"></path>
                            <path d="M144.291,0.118h-1.121l-9.709,20.617h2.081l3.269-6.956h9.838l3.269,6.956H154L144.291,0.118z M147.871,12.114h-8.281l4.126-8.833L147.871,12.114z"></path>                
                        </svg>

					<p>
						As Asia’s Online Fashion Destination, we create endless style
						possibilities through an ever-expanding range of products form the
						most coveted international and local brands, putting you at the
						centre of it all.<b> With ZALORA, You Own Now</b> .
					</p>
				</div>
				<div className='section__2'>
					<h4>CUSTOMER SERVICE</h4>
					<ul>
						<li>Contact Us</li>
						<li>FAQ</li>
						<li>Voucher Terms & Conditions</li>
						<li>Size Guide</li>
						<li>Product Index</li>
						<li>Fashion Glossary</li>
						<li>Track Order</li>
					</ul>
				</div>
				<div className='section__3'>
					<h4>ABOUT US</h4>
					<ul>
						<li>Careers</li>
						<li>Press/Media</li>
						<li>Terms & Conditions</li>
						<li>Privacy Policy</li>
						<li>Sustainability Strategy</li>
						<li>The Affiliate Program</li>
						<li>Influencer Program</li>
						<li>Sell With Us</li>
						<li>Advertise with Us</li>
						<li>Trender Report 2020</li>
						<li>Responsible Disclosure</li>
						<li>Promotions</li>
					</ul>
				</div>
				<div className='section__4'>
					<h4>NEW TO ZALORA?</h4>
					<p>
						Get a <span>RM 35 VOUCHER</span> (plus the latest fashion news and
						product launches) just by subscribing to our newsletter.
					</p>
					<div className='input__form' style={{padding:'0px'}}>
						<label htmlFor='email'>Your Email address</label>
						<br />
						<input
							type='text'
							name='email'
							id='email'
							placeholder='SomeOne@example.com'
						/>
					</div>
					<div className='row'>
                        <Col>
						<button className='btn-outline-inverted'>FOR WOMEN</button>
                        </Col>
                        <Col>
						<button className='btn-outline-inverted'>FOR MEN</button>
                        </Col>
					</div>
				</div>
			</div>
			<div className='d-flex justify-content-between'>
				<div>
					<h4>FIND US ON</h4>
					<div className='social__icons'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='30'
							height='30'
							fill='white'
							className='bi bi-facebook'
							viewBox='0 0 16 16'
						>
							<path d='M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z' />
						</svg>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='30'
							height='30'
							fill='white'
							className='bi bi-instagram'
							viewBox='0 0 16 16'
						>
							<path d='M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z' />
						</svg>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='30'
							height='30'
							fill='white'
							className='bi bi-twitter'
							viewBox='0 0 16 16'
						>
							<path d='M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z' />
						</svg>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='30'
							height='30'
							fill='white'
							className='bi bi-youtube'
							viewBox='0 0 16 16'
						>
							<path d='M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.122C.002 7.343.01 6.6.064 5.78l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z' />
						</svg>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='30'
							height='30'
							fill='white'
							className='bi bi-linkedin'
							viewBox='0 0 16 16'
						>
							<path d='M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z' />
						</svg>
					</div>
                    <p style={{marginTop:'50px',marginBottom:'5px'}}>Any question? Let us help you.</p>
                    <p>Contact  |   Help</p>
				</div>
				<div>
                    <h4>DOWNLOAD OUR APP NOW</h4>
                    <div>
                        <img src="https://static-my.zacdn.com/cms/2020/FOOTER/Download_zalora_app.png" alt="" style={{width:"400px"}} />
                    </div>
                    <p style={{marginTop:'50px',marginBottom:'5px'}}>About  |   Privacy  |   Terms of Service</p>
                    <p>© 2012, 2020 Zalora</p>
                </div>
			</div>
		</div> 
        </div>

		<div className="d-block d-md-none">
			<div className="mobile-footer">
				<div className="row" style={{width:'100%',height:'200%'}}>
					<div className="col d-flex justify-content-center align-content-center ">
						<div>
<svg width="24" height="24" viewBox="0 0 24 24" focusable="false" fill="currentColor" className="icon ml-2 mt-1"><path d="M6.492 5v1.097h9.97L6 18.062v.438h12.75v-1.098H8.223L18.68 5.52 18.676 5z"></path></svg>
							<p>Home</p>
						</div>
					</div>
					<div className="col d-flex justify-content-center align-content-center">
						<div>
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="black" className="bi bi-list-ul ml-2 mt-1" viewBox="0 0 16 16">
							<path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
							</svg>
							<p>Category</p>
						</div>
					</div>
					<div className="col d-flex justify-content-center align-content-center">
						<div>
                        <svg 
                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="black" className="bi bi-cart2 mt-1" viewBox="0 0 16 16">
                        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                        </svg>    
							<p>Cart</p>
						</div>
					</div>
					<div className="col d-flex justify-content-center align-content-center">
						<div>
							<svg 
							xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="black" className="bi bi-heart ml-2 mt-1" viewBox="0 0 16 16">
							<path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
							</svg>
							<p>Wishlist</p>
						</div>
					</div>
					<div className="col d-flex justify-content-center align-content-center">
						<div>
							<svg 
							xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="black" className="bi bi-person ml-2 mt-1" viewBox="0 0 16 16">
							<path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
							</svg>
							<p>Account</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		</>
    )
}

export default Footer

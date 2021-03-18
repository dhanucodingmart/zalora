import React, { useState } from 'react'
import './Mainnavbar.css'
export default function MainNavbar() {
    const [mainNavbar] = useState([
        {path:'/women',title:'women'},
        {path:'/men',title:'men'},
        {path:'',title:'luxury'},
        {path:'',title:'beauty'},
        {path:'',title:'kids'},
        {path:'',title:'lifestyle'},

    ])
    const [dropuser, setdropuser] = useState(false)
    const [dropCart, setdropCart] = useState(false)
    const [dropwish, setdropwish] = useState(false)
    return (
        <>
            <div className="main-navbar d-flex d-md-none">
                <span style={{paddingRight:'36px'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 154 21" className="logo">
                            <polygon points="18.523,1.054 18.518,0.265 0.719,0.265 0.719,1.93 15.282,1.93 0,20.07 0,20.735 18.626,20.735 18.626,19.07 3.248,19.07"></polygon>
                            <path d="M36.263,0.118l-9.709,20.617h2.081l3.269-6.956h9.838l3.269,6.956h2.081L37.383,0.118H36.263z M40.963,12.114h-8.281l4.126-8.833L40.963,12.114z"></path>
                            <polygon points="58.669,0.265 56.686,0.265 56.686,20.735 68.87,20.735 68.87,19.07 58.669,19.07   "></polygon>
                            <path d="M88.688,0c-6.217,0-11.087,4.612-11.087,10.5c0,5.888,4.87,10.5,11.087,10.5 c6.251,0,11.147-4.612,11.147-10.5C99.836,4.612,94.939,0,88.688,0z M88.749,19.188c-5.071,0-9.044-3.816-9.044-8.688 c0-4.872,3.973-8.688,9.044-8.688c5.037,0,8.983,3.816,8.983,8.688C97.732,15.372,93.786,19.188,88.749,19.188z"></path>
                            <path d="M119.743,10.567c2.457-0.985,3.702-2.642,3.702-4.93c0-3.363-2.628-5.371-7.031-5.371h-5.487v20.469h1.983 v-9.638h2.596c2.432,0,3.181,0.348,5.592,4.042l3.658,5.597h2.33l-4.854-7.242C121.318,12.157,120.58,11.136,119.743,10.567z M112.909,1.93h3.171c3.392,0,5.26,1.327,5.26,3.736c0,2.428-1.846,3.765-5.199,3.765h-3.231V1.93z"></path>
                            <path d="M144.291,0.118h-1.121l-9.709,20.617h2.081l3.269-6.956h9.838l3.269,6.956H154L144.291,0.118z M147.871,12.114h-8.281l4.126-8.833L147.871,12.114z"></path>                
                        </svg>
                </span>
            </div>
            <div className="main-navbar d-none d-md-flex">
                <span style={{paddingRight:'36px'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 154 21" className="logo">
                            <polygon points="18.523,1.054 18.518,0.265 0.719,0.265 0.719,1.93 15.282,1.93 0,20.07 0,20.735 18.626,20.735 18.626,19.07 3.248,19.07"></polygon>
                            <path d="M36.263,0.118l-9.709,20.617h2.081l3.269-6.956h9.838l3.269,6.956h2.081L37.383,0.118H36.263z M40.963,12.114h-8.281l4.126-8.833L40.963,12.114z"></path>
                            <polygon points="58.669,0.265 56.686,0.265 56.686,20.735 68.87,20.735 68.87,19.07 58.669,19.07   "></polygon>
                            <path d="M88.688,0c-6.217,0-11.087,4.612-11.087,10.5c0,5.888,4.87,10.5,11.087,10.5 c6.251,0,11.147-4.612,11.147-10.5C99.836,4.612,94.939,0,88.688,0z M88.749,19.188c-5.071,0-9.044-3.816-9.044-8.688 c0-4.872,3.973-8.688,9.044-8.688c5.037,0,8.983,3.816,8.983,8.688C97.732,15.372,93.786,19.188,88.749,19.188z"></path>
                            <path d="M119.743,10.567c2.457-0.985,3.702-2.642,3.702-4.93c0-3.363-2.628-5.371-7.031-5.371h-5.487v20.469h1.983 v-9.638h2.596c2.432,0,3.181,0.348,5.592,4.042l3.658,5.597h2.33l-4.854-7.242C121.318,12.157,120.58,11.136,119.743,10.567z M112.909,1.93h3.171c3.392,0,5.26,1.327,5.26,3.736c0,2.428-1.846,3.765-5.199,3.765h-3.231V1.93z"></path>
                            <path d="M144.291,0.118h-1.121l-9.709,20.617h2.081l3.269-6.956h9.838l3.269,6.956H154L144.291,0.118z M147.871,12.114h-8.281l4.126-8.833L147.871,12.114z"></path>                
                        </svg>
                </span>
                <ul className='mainnav-items'>
                    {mainNavbar.map((d,i)=>{
                        if(d.title === 'kids'){
                            return (<li className="mainnav-item" key={i} style={{position:'relative'}}>
                                {d.title}
                                <svg style={{position:'absolute',top:'19px',right:'50%'}}
                                xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#dfdfdf" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                <path d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                                </svg>
                                </li>)
                        }
                        return <li className="mainnav-item" key={i}>{d.title}</li>
                    })}
                </ul>
                <div className="searchlogo-wrap">
                    <input type="text" placeholder="Search for products, trends and brands" className="searchlogo"/>
                    <button className="searchlogobutton">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                    </button>
                </div>
                <ul className="mainnav-items pl-3">
                     <li className="mainnav-item position-relative">
                        <svg 
                        onMouseEnter={()=>{setdropuser(true)}}
                        onMouseLeave={()=>{setdropuser(false)}}
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-person" viewBox="0 0 16 16">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                        </svg>
                        {
                            dropuser &&
                            <div
                                onMouseEnter={()=>{setdropuser(true)}}
                                onMouseLeave={()=>{setdropuser(false)}}                            
                            >
                            <svg style={{position:'absolute',top:'23px',right:'50%'}}
                            xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#5c5c5c" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
                            <path d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                            </svg>
                            <div className="drop-main">
                                <div className="drop-main-title">
                                    welcome
                                </div>
                                <div className="drop-main-body">
                                    {
                                        ['Login','register','track my orders','help'].map((d,i)=>(
                                            <div key={i}>{d}</div>
                                        ))
                                    }
                                </div>
                            </div>
                            </div>
                        }
                    </li>
                    <li className="mainnav-item position-relative">
                        <svg 
                        onMouseEnter={()=>{setdropwish(true)}}
                        onMouseLeave={()=>{setdropwish(false)}}
                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-heart" viewBox="0 0 16 16">
                        <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                        </svg>

                        {
                            dropwish &&
                            <div
                                onMouseEnter={()=>{setdropwish(true)}}
                                onMouseLeave={()=>{setdropwish(false)}}                             
                            >
                            <svg style={{position:'absolute',top:'23px',right:'50%'}}
                            xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#5c5c5c" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
                            <path d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                            </svg>
                            <div className="drop-main">
                                <div className="drop-main-title">
                                    YOU HAVE NO ITEM(S) IN YOUR WISHLIST
                                </div>
                            </div>
                            </div>
                        }

                    </li>
                    <li className="position-relative">
                        <svg 
                        onMouseEnter={()=>{setdropCart(true)}}
                        onMouseLeave={()=>{setdropCart(false)}}
                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-cart2" viewBox="0 0 16 16">
                        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                        </svg>    
                        {
                            dropCart &&
                            <div
                                onMouseEnter={()=>{setdropCart(true)}}
                                onMouseLeave={()=>{setdropCart(false)}}                             
                            >
                            <svg style={{position:'absolute',top:'23px',right:'50%'}}
                            xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#5c5c5c" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
                            <path d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                            </svg>
                            <div className="drop-main">
                                <div className="drop-main-title text-white">
                                    MY BAG 0 ITEM
                                </div>
                            </div>
                            </div>
                        }
                    </li>
                </ul>

            </div>            
        </>
    )
}

import React, { useState } from 'react'
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
    return (
        <>
        <div className="subNavbar">
            <div className="subNavbar-wrap">
                <div className="subnav-items">
                    {
                        state.map((d,i)=>(<div key={i} className="subnav-item">{d}</div>))
                    }
                </div>

            </div>
        </div>
        </>
    )
}

export default SubNavbar

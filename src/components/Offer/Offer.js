import React from 'react'
import './Offer.css'

function Offer() {
    return (
        <div className='offers-container'>
            <div className='footwear-offer'>
                <img src='https://m.media-amazon.com/images/I/61utX8kBDlL._AC_UL480_FMwebp_QL65_.jpg' />
            </div>
            <div className='wearable-offer'>
                <img src='https://m.media-amazon.com/images/I/71SFsTBSJgL._AC_UY327_FMwebp_QL65_.jpg' />


            </div>
            <div className='fashion-offer'>
                <img src='https://m.media-amazon.com/images/I/712z9RL61bL._AC_UL480_FMwebp_QL65_.jpg' height='320px' width='200px' />

            </div>

        </div>
    )
}

export default Offer
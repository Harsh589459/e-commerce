import React from 'react'
import './Diwali.css'

const DiwaliListItems = [
    {
        id: 1,
        img: 'https://m.media-amazon.com/images/I/61Rc9Nd2iqS._AC_SY200_.jpg'
    },
    {
        id: 2,
        img: 'https://m.media-amazon.com/images/I/51bQa3KS70L._AC_SY200_.jpg'
    },
    {
        id: 3,
        img: 'https://m.media-amazon.com/images/I/61aod7bQ1KL._AC_SY200_.jpg'
    },
    {
        id: 4,
        img: 'https://m.media-amazon.com/images/I/51o-OhsVrPL._AC_SY200_.jpg'
    },
    {
        id: 5,
        img: 'https://m.media-amazon.com/images/I/61Rc9Nd2iqS._AC_SY200_.jpg'
    },
    {
        id: 6,
        img: 'https://m.media-amazon.com/images/I/51bQa3KS70L._AC_SY200_.jpg'
    },
    {
        id: 7,
        img: 'https://m.media-amazon.com/images/I/61aod7bQ1KL._AC_SY200_.jpg'
    },
    {
        id: 8,
        img: 'https://m.media-amazon.com/images/I/51o-OhsVrPL._AC_SY200_.jpg'
    },
]

function Diwali() {
    return (
        <div className='diwali-container'>
            <div className='diwali-header'>Diwali Decor</div>
            <div className='diwali-inner-container'>

                <div className='diwali-product-list'>
                    {
                        DiwaliListItems.map(DiwaliListItems => {
                            return (
                                <div>
                                    <img src={DiwaliListItems.img} width='200px' height='200px' />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Diwali
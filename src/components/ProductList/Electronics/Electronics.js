import React from 'react'
import RecommendationItem from '../../Recommendations/RecommendationItem'
import ElectronicsItems from './ElectronicsItems'
import './Electronics.css'

const ElectronicsList = [
    {
        id: 1,
        title: 'Diwali Electronics',
        img: 'https://m.media-amazon.com/images/I/41jtAEkBW8L._SX300_SY300_QL70_FMwebp_.jpg'
    },
    {
        id: 2,
        title: 'Diwali Electronics',
        img: 'https://m.media-amazon.com/images/I/41jtAEkBW8L._SX300_SY300_QL70_FMwebp_.jpg'
    },
    {
        id: 3,
        title: 'Diwali Electronics',
        img: 'https://m.media-amazon.com/images/I/41jtAEkBW8L._SX300_SY300_QL70_FMwebp_.jpg'
    },
    {
        id: 4,
        title: 'Diwali Electronics',
        img: 'https://m.media-amazon.com/images/I/41jtAEkBW8L._SX300_SY300_QL70_FMwebp_.jpg'
    },
    {
        id: 5,
        title: 'Diwali Electronics',
        img: 'https://m.media-amazon.com/images/I/41jtAEkBW8L._SX300_SY300_QL70_FMwebp_.jpg'
    },
    {
        id: 6,
        title: 'Diwali Electronics',
        img: 'https://m.media-amazon.com/images/I/41jtAEkBW8L._SX300_SY300_QL70_FMwebp_.jpg'
    },
    {
        id: 7,
        title: 'Diwali Electronics',
        img: 'https://m.media-amazon.com/images/I/41jtAEkBW8L._SX300_SY300_QL70_FMwebp_.jpg'
    },
    {
        id: 8,
        title: 'Diwali Electronics',
        img: 'https://m.media-amazon.com/images/I/41jtAEkBW8L._SX300_SY300_QL70_FMwebp_.jpg'
    },
    {
        id: 9,
        title: 'Diwali Electronics',
        img: 'https://m.media-amazon.com/images/I/41jtAEkBW8L._SX300_SY300_QL70_FMwebp_.jpg'
    },

]

function Electronics() {
    return (
        <div className='electronics-container'>
            <div className='electronics-heading'>
                Electronics
            </div>
            <div className='electronics-list'>
                {
                    ElectronicsList.map(item =>

                        <ElectronicsItems
                            key={item.id}
                            title={item.title}
                            img={item.img}
                        />
                    )
                }

            </div>
        </div>
    )
}

export default Electronics
import React from 'react'
import RecommendationItem from './RecommendationItem'
import './Recommendations.css'

const recommendationData = [
    {
        id: 1,
        title: 'Sofa',
        description: 'This is the best sofa you ever got',
        price: 90,
        img: 'https://images-eu.ssl-images-amazon.com/images/G/31/amazon_basics/ashaln/gw_btf_pc/xcm_banners_phase3-pc-qc-furniture-tile1-1o5j9_372x232_in-en._SY116_CB609064370_.jpg'

    },
    {
        id: 2,
        title: 'Lenovo Laptop',
        description: 'This is the best Laptop you ever got',
        price: 200,
        img: 'https://images-eu.ssl-images-amazon.com/images/I/61kYrhv-t-L._AC_UL160_SR160,160_.jpg'

    },
    {
        id: 3,
        title: 'Diwali-Decor',
        description: 'This is the best Diwali Decor ',
        price: 10,
        img: 'https://m.media-amazon.com/images/I/61gyENWb1hL._AC_SY200_.jpg'

    },
    {
        id: 4,
        title: 'Cream',
        description: 'This is the best cold cream',
        price: 20,
        img: 'https://m.media-amazon.com/images/I/516k52nQVyL._SY355_.jpg'

    },
    {
        id: 5,
        title: 'Apple iPhone 11 ',
        description: 'Best Mobile phone in the industry',
        price: 500,
        img: 'https://m.media-amazon.com/images/I/71QE00iB9IL._AC_UY327_FMwebp_QL65_.jpg'

    },
    {
        id: 6,
        title: 'Boat',
        description: 'This is the best Headphone ',
        price: 250,
        img: 'https://m.media-amazon.com/images/I/61kWB+uzR2L._AC_UY327_FMwebp_QL65_.jpg'

    },



]

function Recommendations() {
    return (

        <div className='recommendation-container'>
            <div className='recommendation-header'>
                Recommendations
            </div>
            <div className='recommendation-list'>
                {
                    recommendationData.map(item =>
                        <RecommendationItem
                            key={item.id}
                            title={item.title}
                            description={item.description}
                            price={item.price}
                            img={item.img}
                        />)
                }
            </div>


        </div>

    )
}

export default Recommendations
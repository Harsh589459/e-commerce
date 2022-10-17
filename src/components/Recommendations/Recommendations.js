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
        title: 'Sofa',
        description: 'This is the best sofa you ever got',
        price: 90,
        img: 'https://images-eu.ssl-images-amazon.com/images/G/31/amazon_basics/ashaln/gw_btf_pc/xcm_banners_phase3-pc-qc-furniture-tile1-1o5j9_372x232_in-en._SY116_CB609064370_.jpg'

    },
    {
        id: 3,
        title: 'Sofa',
        description: 'This is the best sofa you ever got',
        price: 90,
        img: 'https://images-eu.ssl-images-amazon.com/images/G/31/amazon_basics/ashaln/gw_btf_pc/xcm_banners_phase3-pc-qc-furniture-tile1-1o5j9_372x232_in-en._SY116_CB609064370_.jpg'

    },
    {
        id: 4,
        title: 'Sofa',
        description: 'This is the best sofa you ever got',
        price: 90,
        img: 'https://images-eu.ssl-images-amazon.com/images/G/31/amazon_basics/ashaln/gw_btf_pc/xcm_banners_phase3-pc-qc-furniture-tile1-1o5j9_372x232_in-en._SY116_CB609064370_.jpg'

    },
    {
        id: 5,
        title: 'Sofa',
        description: 'This is the best sofa you ever got',
        price: 90,
        img: 'https://images-eu.ssl-images-amazon.com/images/G/31/amazon_basics/ashaln/gw_btf_pc/xcm_banners_phase3-pc-qc-furniture-tile1-1o5j9_372x232_in-en._SY116_CB609064370_.jpg'

    },
    {
        id: 6,
        title: 'Sofa',
        description: 'This is the best sofa you ever got',
        price: 90,
        img: 'https://images-eu.ssl-images-amazon.com/images/G/31/amazon_basics/ashaln/gw_btf_pc/xcm_banners_phase3-pc-qc-furniture-tile1-1o5j9_372x232_in-en._SY116_CB609064370_.jpg'

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
import React from 'react'
import './ElectronicsItems.css'

function ElectronicsItems({
    id,
    title,
    img

}

) {
    return (
        <div className='electronics-mincontainer'>
            <img src={img} />
            <div className='electronics-title'>
                {title}
            </div>



        </div>
    )
}

export default ElectronicsItems
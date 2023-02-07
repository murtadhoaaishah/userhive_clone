import React from 'react'
import './ScreenFour.css'

const ScreenFour = () => {
    const images = [
        "/images/the-portfolio-collective.01427c99.svg",
        "/public/images/Fitbit_logo16.11321386.svg",
        "/images/infarm1.3c7f23ef.svg",
        "/images/SENIC-logo-rgb-W_720x.webp"

    ]
    return (
        <div className='screen-four'>
            <p className='trusted'><span className='trusted-focus'> Trusted</span> by big and small</p>
            {images.map((img, imgIndex) => (


                <div className='trusted-images' key={`img_${imgIndex}`}>
                    <img src={img} />
                </div>
            )
            )

            }
        </div>
    )
}

export default ScreenFour

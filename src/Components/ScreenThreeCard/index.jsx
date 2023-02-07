import React from 'react'
import './screenThreeCard.css'

const ScreenThreeCard = ({ title, desc }) => {



    return (
        <div className='eachScreenThreeCard'>

            <p className='screenthreeCard-heading'>{title}</p>
            <p className='screenThreeCard-desc'>{desc}</p>
            <button>
                <span>Learn more</span>
                <img src="/public/vectors/arrow-right-line.svg" alt="" />
            </button>

        </div>
    )
}

export default ScreenThreeCard

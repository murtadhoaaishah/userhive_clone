import React from 'react'
import "./Hero.css"

const Hero = () => {
    return (
        <div className='hero-wrapper'>
            <p className='hero-heading'>Heads of Product hire us to do continuous user discovery, so they can <span className='focus'>focus on all the other fires.</span></p>
            <p className='hero-desc'>Partner with us. Give your product team superpowers. Start tomorrow and stop whenever.

            </p>
            <button className='hero-button'>
                <span>Start now</span>
                <img src="/public/vectors/arrow.svg" alt="" />
            </button>
        </div>
    )
}

export default Hero

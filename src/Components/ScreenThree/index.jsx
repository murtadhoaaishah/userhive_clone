import React from 'react'
import ScreenThreeCard from '../ScreenThreeCard'
import "./ScreenThree.css"

const ScreenThree = () => {

    const screenThreeCardDetails = [
        {
            screenThreeCardHeading: 'Save your political capital',
            screenThreeCardDesc: 'Don\'t spend your political capital to do what your gut tells you is right. Get the rest of the business on your side with qualitative data and a real understanding of your customer.'
        },
        {
            screenThreeCardHeading: 'Deliver value, quickly',
            screenThreeCardDesc: 'In a rush? We can start tomorrow. We can make sure you\'re not left waiting while you hire a permanent team member, or pick up the slack when you can\'t justify a hire. Ramp up our services with your needs, and ramp back down again as the rush subsides.'
        },
        {
            screenThreeCardHeading: 'Best practices not best of luck',
            screenThreeCardDesc: 'Don\'t leave it to chance. We bring years of experience in the best practices, using frameworks like Jobs to be Done and Continuous User Discovery.'
        }
    ]

    return (
        <section className='section-three'>
            <p className='shortcut'>There's no shortcut to understanding your customers. With us <span className='focus'>you won't need one</span>.</p>

            <p className='teams'><span className='colored-text'>For teams that have</span> lent on intuition for too long, <span className='colored-text'>and </span>don't know the why  <span className='colored-text'>behind customer actions.</span></p>
            <div className='screenthreeCard-Wrapper'>

                {

                    screenThreeCardDetails.map((cardDetails, cardDetailsIndex) => (
                        <ScreenThreeCard title={cardDetails.screenThreeCardHeading} desc={cardDetails.screenThreeCardDesc} key={`cardDetails_${cardDetailsIndex}`} />)


                    )
                }
            </div>
        </section>
    )
}

export default ScreenThree

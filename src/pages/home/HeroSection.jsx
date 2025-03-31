import React from 'react'

import card1 from "../../assets/Client2_GroupKickboxing.png"
import card2 from "../../assets/Client2_GroupYoga.png"
import card3 from "../../assets/Client2_GroupPilates.png"

const cards = [
    {
        id: 1,
        image: card1,
        trend:'Group Session',
        title: 'Kickboxing'
    },
    {
        id: 2,
        image: card2,
        trend:'Group Session',
        title: 'Pilates'
    },
    {
        id: 3,
        image: card3,
        trend:'Group Session',
        title: 'Yoga'
    },
]

const HeroSection = () => {
  return (
    <section className='section__container hero__container'>
        {
            cards.map((card)=>(
                <div key={card.id} className='hero_container'>
                    <img src={card.image} alt=''/>
                    <div className='hero__container link a:hover'>
                        <p>{card.trend}</p>
                        <h4>{card.title}</h4>
                        <a href='/shop'>Discover More</a>
                    </div>
                </div>
            ))


        }
    </section>
  )
}

export default HeroSection
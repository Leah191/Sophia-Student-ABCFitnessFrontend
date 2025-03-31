import React from 'react'
import { Link } from 'react-router-dom'
import bannerImg from "../../assets/ABC/Client2_GroupPilates.png"

const Banner = () => {
  return (
    <div className='section__container header__container'>
      <div className='header__content z-30'>
      <h3>Are you ready to transform your body, boost your energy, and elevate your confidence? 
          At ABC Fitness Studio, we’re here to help you crush your fitness goals 
          and become the best version of yourself.</h3>
      
        <h2>Get Fit, Stay Strong, Live Better – Join ABC Fitness Studio Today!</h2>
        <h1 className=''>$10</h1><p>With unlimited access</p>
        <h1>Limited-Time Offer!</h1>
        
        ,<button className='btn'><Link to='/shop'>Join Now</Link></button>
      </div>
      
      <div>
        <img src={bannerImg} alt='banner image'/>
      </div>

    </div>
  )
}

export default Banner
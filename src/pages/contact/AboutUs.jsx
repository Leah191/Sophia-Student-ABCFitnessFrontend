import React from 'react'
import bannerImg1 from "../../assets/Client2_GroupYoga.png"


const AboutUs = () => {
  return (
    <div className='section__container header__container'>
    <div className='header__content z-30'>
      <h1>About Us</h1>
      <p>At ACB Fitness Studio, we're more than just a gym – we're a community dedicated to helping you achieve your fitness goals. 
        Our state-of-the-art facility offers dynamic class sessions, expert trainers, 
        and top-notch equipment designed to inspire and challenge you every step of the way.
        Whether you're just starting out or pushing your limits, 
        ACB Fitness Studio provides a supportive environment where everyone is welcomed and empowered. 
        Join us today and experience fitness like never before!</p>
        
      <h3 className='section__subheader1'>Your Journey. Your Pace. Our Support.</h3>
      
    </div>
    <div>
    <img src={bannerImg1} alt='banner image'/>
    </div>

    </div>
  )
}

export default AboutUs
import React from 'react'


const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <>
    
    <footer className='section__container footer__container'>
        <div className='footer__col'>
            <h4>Contact Us</h4>
            <p> 
                <a href="mailto:kalaputtasodd@gmail.com"><span><i className="ri-mail-line"> support@abcfitness.com</i></span></a>
                
                
            </p>
            <p>
                <span><i className="ri-phone-line"></i></span>
                203-218-9999
            </p>
        </div>
        <div className='footer__col'>
            <h4>Location</h4>
            <p>
                <span><i className="ri-map-pin-line"></i></span>
                123 Holly Street Bridgeport, CT 06607
            </p>
        </div>
        <div className='footer__col'>
            <h4>BUSINESS HOURS</h4>
            <p>
                MON-FRI 6:00AM-10:00PM
            </p>
            <p>
                SAT 7:00AM-9:00PM
            </p>
            <p>
                SUN 7:00AM-9:00PM
            </p>
        </div>
        <div className='footer__col'>
            <h4>Follow Us</h4>
            <p>
                <a href="https://www.instagram.com/kala203" target="_blank" rel="noopener noreferrer">
                <i className="ri-instagram-line">Instagram</i></a>
            </p>
            <p>
                <a href="https://www.facebook.com/Lputtasodd" target="_blank" rel="noopener noreferrer">
                <i className="ri-facebook-box-fill">Facebook</i></a>
            
            </p>
        </div>
        
    </footer>
    
        <div className='footer__bar'>
        Copyright &copy; {currentYear} by ABCFitness. All rights reserved
       </div>
    </>
  )
}

export default Footer
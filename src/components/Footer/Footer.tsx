import React from 'react'
import EmailSvg from '../../assets/svg/EmailSvg'
import "./footer.css"
import Facebook from '../../assets/svg/Facebook'
import Pinterest from '../../assets/svg/Pinterest'
const Footer = () => {
  return (
    <footer className='footer_section'>
        <div className='footer_heading'>
            <p className='footer_title'>Join us With Affiliate Program</p>
            <div className='footer_info'>
              <EmailSvg />
              <input className='email_input' type='text' placeholder='Type your email address here'/>
              <span className='footer_button'>Submit Now</span>
            </div>
        </div>
        <div className='main_footer_container'>
        <div className='footer_bottom_section'>
          <div>
            <p>Follow on Social</p>
            <div className='social_icons'>
            <div className='social_media_icon'><Facebook/></div>
            <div className='social_media_icon'><Pinterest /></div>
            </div>
           
          </div>
          <div className='address_section'>
            <div className='address_heading'>
              <p className='footer_address_title'>Boarding & Day Care</p>
              <p className='footer_number'>(616)-459-8622</p>
              <span className='address'>2125 Howard Streat Grand Rapids, Mi Michigan</span>
            </div>
             <div className='address_heading'>
              <p className='footer_address_title'>Boarding & Day Care</p>
              <p className='footer_number'>(616)-459-8622</p>
              <span className='address'>2125 Howard Streat Grand Rapids, Mi Michigan</span>
            </div>
          </div>
        </div>
        </div>
        <div className='copy_right_section'>
          <div className='copy_rights'>
            <p> &#169; all rights reserved & design by Vikas singh</p>
          </div>
          <div className='footer_list'>
          <ul>
            <li>our Services</li>
            <li>About us</li>
            <li>Shipping</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
          </div>
        </div>
    </footer>
  )
}

export default Footer;
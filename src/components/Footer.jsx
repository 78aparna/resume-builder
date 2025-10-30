import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

function Footer() {
  return (
    <div style={{height:'300px',backgroundColor:'purple',color:'white'}}
    className='d-flex justify-content-center align-items-center p-5 flex-column'>
      <h3>Contact Us</h3>
      <h5 className='fw-border'><MdEmail />resumebuilder@gmail.com</h5>
      <h5 className='fw-border'><FaPhoneVolume /> 8790564101</h5>
      <h4>Connect with Us</h4>
      <div className='d-flex justify-content-center fs-4 my-3'>
        <FaWhatsapp className='me-3' />
        <FaFacebook className='me-3'/>
         <FaInstagramSquare />
      </div>
      <p>Designed & built with ❤️ using react</p>
    </div>
    
  )
}

export default Footer

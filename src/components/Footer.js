import React, { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
// import { FaCopyright } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { toast } from 'react-toastify';
import axios from 'axios';
import { url } from '../App'

function Footer() {
  let[email,setEmail]=useState("")

  let handleSubscribe=async()=>{
try {
  let res=await axios.post(`${url}/sendMail`,{email})
  if(res.status===201){
    toast.success(res.data.message)
    setEmail("")
  }

} catch (error) {
  toast.error(error.response.data.message)
  if(error.response.status===401){
    toast.error("Please Enter Your Email")
  }
}
  }
  return (
    <>
      <div className="footer">
        <div className="footer_horizontal">
          <div className="footer_left">
            <p className="footer_left_1">
              XYZ <i>INDUSTRIES</i>
            </p>
            <p className="footer_left_2">
              XYZ Industries: Where real estate dreams meet seamless
              transactions, transforming aspirations into achievements.
            </p>
            <button className="footer_left_3">
              EXPLORE
              <IoIosArrowRoundForward />
            </button>
          </div>
          <div className="footer_right">
            <div className="footer_right_1">
              <div className="footer_right_11">
                <pre>Quick Links</pre>
              </div>
              <div className="footer_right_12">
                <p>About Us</p>
                <p>Blog</p>
                <p>Testimonials</p>
                <p>Terms and Conditions</p>
                <p>Privacy Policy</p>
                <p>Site Map</p>
              </div>
            </div>
            <div className="footer_right_2">
              <div className="footer_right_21">
                <pre>Customer Support</pre>
              </div>
              <div className="footer_right_22">
                <p>Feedback</p>
                <p>Report a Problem</p>
                <p>Request a Call Back</p>
              </div>
            </div>
            <div className="footer_right_3">
              <p className="footer_right_31">
                <pre>Subscribe Us</pre>
              </p>
              <p className="footer_right_32">
                Subscribe to our weekly newsletter
              </p>
              <input type="email"placeholder="Email Id" className="footer_right_3_btn1"onChange={(e)=>setEmail(e.target.value)}/>
              {/* <button className="footer_right_3_btn1">Email Id</button> */}
              <button className="footer_right_3_btn2" onClick={handleSubscribe} >Subscribe</button>
            </div>
          </div>
        </div>
        <div className="horizontal-line"></div>
        <div className="footer_bottom">
          <div className="footer_bottom_icons" >
            <FaYoutube style={{ color: "white" }} />

            <FaTwitter style={{ color: "white" }} />
            <FaInstagramSquare style={{ color: "white" }} />
            <FaFacebook style={{ color: "white" }} />
          </div>
          <div className="footer_bottom_content" style={{ color: "white" }}>
            <span>
              Terms <span className="small-vertical-line"></span> Privacy
            </span>
            <span>
              {/* <FaCopyright /> */}
              <FaRegCopyright />
              2024XYZ
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

import React from 'react'
import connect from "../assets/connect.png"
function Connect() {
  return <>
  <div className='connect'>
    <div className='connect_left'>
<img src={connect}/>
    </div>
    <div className='connect_right'>
        <p className='connect_right_1'>Connect and Communicate</p>
        <p><pre className='connect_right_2'>Our platform facilitates direct communication between buyer and<br/> seller, making negotiations transparent and straightforward.</pre></p>
        <p className='connect_right_3'>Learn More</p>
    </div>
  </div>
  </>
}

export default Connect

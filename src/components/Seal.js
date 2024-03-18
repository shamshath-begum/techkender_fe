import React from 'react'
import seal from "../assets/seal.png"
function Seal() {
  return <>
  <div className='seal'>
     <div className='seal_left'>
        <p className='seal_left_1'>Seal the Deal Securely</p>
        <p className='seal_left_2'><pre>Advance payments made safe. Secure your agreement with <br/>confidence, and step closer to your dream property.</pre></p>
        <p className='seal_left_3'>Learn More</p>
     </div>
     <div className='seal_right'>
        <img src={seal}/>
     </div>
  </div>
  </>
}

export default Seal

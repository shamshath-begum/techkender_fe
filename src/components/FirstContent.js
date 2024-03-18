import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

function FirstContent() {
  return <>
  <div className='content_1'>
    <div className='text'>
  <p className='text_1'>CONNECTING DREAMS TO REALITY</p>
<p className='text_2'>YOUR PREMIER</p>
<p className='text_3'>REAL ESTATE MARKETPLACE</p>
</div>
<div className='text1'>
<p>Where every search ends with a home</p>
</div>

<div className="buttons">
<button className='btn1' >Find Your Home<IoIosArrowRoundForward /></button>

<button className='btn2' style={{height:50,width:200,color:"white",backgroundColor:"blue",borderRadius:20,border:"1px solid white"}}>List Your Property<IoIosArrowRoundForward /></button>
</div>
  </div>
  </>
}

export default FirstContent

import React from 'react'
import limage from "../assets/lastimage.png"
import { IoIosArrowRoundForward } from "react-icons/io";

function Trust() {
  return <>
    <div className='trust'>
      <div className='trust_top'>
<div className='trust_top_1'>YOUR <i>TRUSTED</i> PARTNER IN
THE FUTURE <i>OF HOUSING</i></div>
<div className='overlay'>
<div className='trust_top_2'>Our partnerships with governments and local banks ensure that our housing prices are affordable enough for our target market.</div>
<button className='trust_top_3'>
Join Our Community Today<IoIosArrowRoundForward />
</button>
</div>
      </div>
      <div className='trust_bottom' >
        <img src={limage}/>
      </div>
    </div>
    </>
}

export default Trust

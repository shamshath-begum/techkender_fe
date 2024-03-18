import React from 'react'
import discover from "../assets/discover.png"

function Discover() {
  return<>
  <div className='discover'>
<div className='dis_left'>
    <img src={discover}/>
</div>
<div className='dis_right'>
    <p className='dis_right_dis'>
    Discover Your Perfect Home
    </p>
    <p className='dis_right_use'>
    <pre>Use our advanced filters to narrow down your search. Specify<br/> everything from location to amenities, ensuring you find the<br/> property that feels right.</pre>
    </p>
    <p className='dis_right_learn'>Learn More</p>
</div>
  </div>
  </>
}

export default Discover

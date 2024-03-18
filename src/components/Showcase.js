import React from 'react'
import show from "../assets/show.png"

function Showcase() {
  return <>
  <div className='show'>
<div className='show_left'>
<p>Showcase Your Property</p>
<p><pre>List your property with ease. Fill in detailed forms to highlight every <br/>feature, attracting the perfect buyer directly.</pre></p>
<p>Learn More</p>
</div>
<div className='show_right'>
<img src={show}/>
</div>
  </div>
  </>
}

export default Showcase

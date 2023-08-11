import React from 'react'
import './featured.css';



const Feature = () => {
  return (
    <div className='featured section__padding' id="featured">
      <div className='featured-content'>
        <p>Javascript implementation practice projects</p>

        <div className='image-boxes'>
          <div className='img-box small'>
            <p>image 1</p>
          </div>


          <div className='img-box small'>
            <p>image 2</p>
          </div>


        </div>
      </div>
    </div>

  )
}

export default Feature
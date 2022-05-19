import React from 'react'
import './HeroSection.css'
import MovingText from 'react-moving-text'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowUp} from '@fortawesome/free-solid-svg-icons'

function HeroSection() {

  return (
    <div className='hero-container animate__animated animate__fadeInLeft'>
      <div className="elle">
      <h1 className='animate__animated animate__slideInLeft'>START YOUR AUSTRALIAN AVIATION ADVENTURE</h1>
      <MovingText
            type="fadeInFromBottom"
            duration="4000ms"
            delay="2s"
            direction="normal"
            timing="ease-in"
            iteration="1"
            fillMode="none">
      <p>Click On Navigation Bar To Begin  <FontAwesomeIcon className='arrow' icon={faArrowUp} /></p>
      </MovingText>
      </div>

    </div>
  )
}

export default HeroSection
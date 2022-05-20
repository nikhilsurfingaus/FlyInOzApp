import React from 'react'
import './aboutcomp.css'

function AboutComp() {
  return (
    <div>
        <div className="masthead animate__animated animate__slideInLeft">
            <h1 className='masthead-intro animate__animated animate__slideInLeft'>ABOUT US</h1>

        </div>

        <div className='con animate__animated animate__slideInLeft'>
            <div className="introduction">
                <h1 className="heading">About FlyInOz</h1>
                <p>Here at FlyInOz we seek to connect the Australian public to domestic aviation here in Australia. 
                 Providing Aussies a guide to Airline Operators and Airports, through a collated exposition of booking
                 links and navigation information for airports. Adding to the aviation hub expereience we also offer your
                 you as domestic travllers the opporunity to post your flight reviews in out un-filtered reviews hub.
                </p>
            </div>

            <div className="questions">
                <h1 className="heading">FAQ's</h1>
                <dl className="question-list">
                    <dt className="question">How do I book a flight with a specific airline?</dt>
                    <dd className="answer">Navigate to our Airlines page, select your airline and hit <b>Book</b> to be directed to their booking form</dd>
                    <dt className="question">I need directions to an Airport?</dt>
                    <dd className="answer">Need directions, we got you covered, Navigate to out Airports page and hit <b>Directions</b> for a route to your airport</dd>
                    <dt className="question">Can I write a domestic flight review here?</dt>
                    <dd className="answer">Of course you can, check out our Reviews page to post your flight review and click <b>Submit</b> for others to view</dd>
                </dl>
            </div>
        </div>
    </div>
  )
}

export default AboutComp
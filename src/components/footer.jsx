
import React from 'react'
import Footer from '../components/footercomp'
import Icon from '../components/Icon'
import './footstyle.css'

export function FooterContainer() {
    return (
        <Footer className="animate__animated animate__slideInUp">
            <Footer.Wrapper>
            <Footer.Row>
                <Footer.Column>
                <Footer.Title>Airlines</Footer.Title>
                    <Footer.Link href="https://www.qantas.com/us/en.html">Qantas</Footer.Link>
                    <Footer.Link href="https://www.virginaustralia.com/au/en/">Virgin Australia</Footer.Link>
                    <Footer.Link href="https://www.jetstar.com/au/en/home">Jetstar</Footer.Link>
                    <Footer.Link href="https://www.rex.com.au/">REX</Footer.Link>
                    <Footer.Link href="https://www.allianceairlines.com.au/">Alliance</Footer.Link>
                    <Footer.Link href="https://www.cobham.com.au/">Cobham</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Airports</Footer.Title>
                    <Footer.Link href="https://www.sydneyairport.com.au/">Sydney</Footer.Link>
                    <Footer.Link href="https://www.melbourneairport.com.au/">Melbourne</Footer.Link>
                    <Footer.Link href="https://www.bne.com.au/">Brisbane</Footer.Link>
                    <Footer.Link href="https://www.adelaideairport.com.au/">Adelaide</Footer.Link>
                    <Footer.Link href="https://www.perthairport.com.au/">Perth</Footer.Link>
                    <Footer.Link href="https://www.goldcoastairport.com.au/">Gold Coast</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Social</Footer.Title>
                    <Footer.Link href="https://github.com/nikhilsurfingaus"><Icon className="fab fa-github" />Github</Footer.Link>
                    <Footer.Link href="https://www.instagram.com/nikhilnaik99/?hl=en"><Icon className="fab fa-instagram" />Instagram</Footer.Link>
                    <Footer.Link href="https://www.youtube.com/channel/UCt3P3Sx1ki1fnHZpGh-IWTg"><Icon className="fab fa-youtube" />Youtube</Footer.Link>
                    <Footer.Link href="https://www.facebook.com/nikhilnaik99"><Icon className="fab fa-facebook" />Facebook</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            </Footer.Wrapper>
            <div className="rights">
                <p>Wave Flight Simulation ©</p>
            </div>
        </Footer>
    )
}
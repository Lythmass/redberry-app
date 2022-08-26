import React from 'react'
import styled from 'styled-components'

import Logo from './Logo.js'
import LandingPageImage from './LandingPageImage.js'
import LandingPageButton from './LandingPageButton.js'

const LandingPageStyled = styled.section`
     display: flex;
     flex-direction: column;
     justify-content: space-evenly;
     align-items: center;

     width: 100%;
     min-height: 100vh;
     gap: 3rem;

     > div {
          display: flex;
          gap: 1rem;
          flex-direction: column;
     }
`

export default function LandingPage(props) {
     return (
          <LandingPageStyled>
               <Logo />
               <LandingPageImage />
               <div>
                    <LandingPageButton text = "ჩანაწერის დამატება"/>
                    <LandingPageButton text = "ჩანაწერების სია"/>
               </div>

          </LandingPageStyled>
     )
}

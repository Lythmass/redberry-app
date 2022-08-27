import React from 'react'
import styled from 'styled-components'

import { Link } from "react-router-dom";

const GeneralHeaderStyled = styled.div`
     margin: 2rem 0 0;
     width: 100%;
     position: relative;
     > div {
          justify-self: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.31rem;

          > h1 {
               font-weight: 700;
               font-size: 16px;
               line-height: 20px;
               margin: 0;
          }

          > p {
               font-size: 14px;
               color: #898989;
               margin: 0;
          }
     }
`

const BackButtonStyled = styled.img`
     width: 9.21px;
     height: 16px;
     cursor: pointer;
     position: absolute;
     left: 1.25rem;
     top: 0.25rem;
`

export default function GeneralTitle(props) {
     return (
          <GeneralHeaderStyled>
               {/* Button to go back */}
               <Link to = {props.goBack}>
                    <BackButtonStyled src = './images/BackButton.png' />
               </Link>
               <div>
                    <h1>{props.text}</h1>
                    <p>{props.numOfPage}</p>
               </div>
          </GeneralHeaderStyled>
     )
}

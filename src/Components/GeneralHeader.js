import React from 'react'
import styled from 'styled-components'

const GeneralHeaderStyled = styled.div`
     margin: 2rem 0 0;
     width: 100%;
     position: relative;
     > img {
          width: 9.21px;
          height: 16px;
          cursor: pointer;
          position: absolute;
          left: 1.25rem;
          top: 0.25rem;
     }

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

export default function GeneralTitle(props) {
     return (
          <GeneralHeaderStyled>
               <img src = './images/BackButton.png' /> {/* Button to go back */}
               <div>
                    <h1>{props.text}</h1>
                    <p>{props.numOfPage}</p>
               </div>
          </GeneralHeaderStyled>
     )
}

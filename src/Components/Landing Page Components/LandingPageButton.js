import React from 'react'
import styled from 'styled-components'

const LandingPageButtonStyled = styled.div`
     display: flex;
     justify-content: center;
     align-items: center;

     background-color: #62A1EB;
     color: #fff;

     height: 3.75rem;
     width: 358px;
     border-radius: 8px;

     cursor: pointer;
     position: relative;
     overflow: hidden;
     z-index: 1;
     &:before {
          content: "";
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: -100%;
          background-color: #2b7ee0;
          transition: 0.25s ease;
          z-index: -1;
     }
     &:hover:before {
          left: 0;
     }

`

export default function LandingPageButton(props) {
     return (
          <LandingPageButtonStyled>
               <h3>{props.text}</h3>
          </LandingPageButtonStyled>
     )
}

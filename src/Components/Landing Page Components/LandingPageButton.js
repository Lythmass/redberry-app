import React from 'react'
import styled from 'styled-components'

import { Link } from "react-router-dom";

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
          background-color: #317AD0;
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
               <Link
                    to = {props.toPage}
                    style={{padding: '4.5rem', textDecoration: 'none', color: '#fff', fontSize: '20px'}}
               >
                    {props.text}
               </Link>
          </LandingPageButtonStyled>
     )
}

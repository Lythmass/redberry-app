import React from 'react'
import styled from 'styled-components'

import { Link } from "react-router-dom";

const NextButtonStyled = styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
     align-self: flex-end;

     background-color: #62A1EB;
     color: #fff;

     margin: 2rem 1rem;
     height: 3rem;
     width: 132px;
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

export default function NextButton(props) {
     return (
          <NextButtonStyled>
               <Link
                    to = "/"
                    style={{ textDecoration: 'none', color: '#fff', fontSize: '20px'}}
               >
                    {props.text}
               </Link>
          </NextButtonStyled>
     )
}

import React from 'react'
import styled from 'styled-components'

import { Link } from "react-router-dom";

const NextButtonStyled = styled.button`
     display: flex;
     justify-content: center;
     align-items: center;
     align-self: flex-end;

     background-color: #62A1EB;
     color: #fff;

     margin: 2rem 0;
     height: 3rem;
     width: 132px;
     border-radius: 8px;

     cursor: pointer;
     position: relative;
     overflow: hidden;
     z-index: 1;

     outline: none;
     border: none;

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
          <NextButtonStyled type = "submit">
               <p
                    style={{ padding: '3rem',textDecoration: 'none', color: '#fff', fontSize: '18px'}}
               >
                    {props.text}
               </p>
          </NextButtonStyled>
     )
}

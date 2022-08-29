import React from 'react'
import styled from 'styled-components'

const RadiosStyled = styled.div`
     display: flex;
     width: 100%;
     flex-direction: column;
     gap: 1.25rem;
`

const HeaderLabelStyled = styled.label`
     font-size: 18px;
     font-weight: bold;
     color: ${(props) => props.error ? `#E52F2F` : `black`};
`

const RadiosWrapperStyled = styled.div`
     padding-bottom: 2.5rem;
     display: flex;
     gap: 3rem;
     > div {
          display: flex;
          gap: 1rem;
          > label {
               font-size: 1rem;
               font-weight: 400;
          }
     }
`
const InputStyled = styled.input.attrs({type: "radio"})`
     width: 20px;
     height: 20px;
     border-radius: 50%;
     outline: none;
     border: 2px solid #4D9AC3;
     -webkit-appearance: none;
     position: relative;
     overflow: hidden;
     &:before {
          content: "";
          position: absolute;
          top: -100%; left: 50%;
          transform: translateX(-50%) translateY(-50%);
          background-color: #4D9AC3;
          width: 60%; height: 60%;
          border-radius: 50%;
          transition: 0.125s ease;
     }
     &:focus:before {
          top: 50%;
     }
`


export default function Radios(props) {

     return (
          <RadiosStyled>
               <HeaderLabelStyled>{props.name}</HeaderLabelStyled>
               <RadiosWrapperStyled>
                    <div>
                         <InputStyled name = {props.keyName} type = "radio" id = {props.option1}/>
                         <label htmlFor = {props.option1}>{props.option1}</label>
                    </div>
                    <div>
                         <InputStyled name = {props.keyName} type = "radio" id = {props.option2}/>
                         <label htmlFor = {props.option2}>{props.option2}</label>
                    </div>
               </RadiosWrapperStyled>
          </RadiosStyled>
     )

}

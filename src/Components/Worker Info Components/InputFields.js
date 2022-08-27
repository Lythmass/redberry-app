import React from 'react'
import styled from 'styled-components'

const InputFieldsStyled = styled.div`
     display: flex;
     flex-direction: column;
     gap: 0.5rem;
     > label {
          font-size: 18px;
          font-weight: bold;
     }
     > input {
          width: 358px;
          height: 60px;
          font-size: 16px;
          line-height: 21px;
          padding: 0 1rem;
          color: hsl(0, 100%, 0%, 0.6);
          border-radius: 8px;
          border: 1.9px solid #8AC0E2;
          outline: none;
          &:focus {
               border: 1.9px solid #317AD0;
          }
     }

     > p {
          font-size: 14px;
          color: #2E2E2E;
          margin: 0;
     }
`

export default function Inputfields(props) {

     function handleChange(event) {
          localStorage.setItem(props.keyName, event.target.value);
     }

     return (
          <InputFieldsStyled>
               <label>{props.label}</label>
               <input
                    onChange = {(event) => handleChange(event)}
                    type = {props.type}
                    pattern = {props.pattern}
                    value = {localStorage.getItem(props.keyName)}
               />
               <p>{props.description}</p>
          </InputFieldsStyled>
     )
}

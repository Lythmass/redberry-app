import React from 'react'
import styled from 'styled-components'

const InputFieldsStyled = styled.div`
     display: flex;
     flex-direction: column;
     gap: 0.5rem;
     > label {
          font-size: 18px;
          font-weight: bold;
          color: ${(props) => props.error ? `#E52F2F` : `black`};
     }
     > input {
          width: 358px;
          height: 60px;
          font-size: 16px;
          line-height: 21px;
          padding: 0 1rem;
          color: hsl(0, 100%, 0%, 0.6);
          border-radius: 8px;
          border: 1.9px solid ${(props) => props.error ? `#E52F2F` : `#8AC0E2`};
          outline: none;
          &:focus {
               border: 1.9px solid ${(props) => props.error ? `#E52F2F` : `#8AC0E2`};
          }
     }

     > p {
          font-size: 14px;
          color: ${(props) => props.error ? `#E52F2F` : `#2E2E2E`};
          margin: 0;
     }
`

export default function Inputfields(props) {
     const [error, setError] = React.useState(false);

     const [checkLength, setCheckLength] = React.useState(true);
     const [checkLanguage, setCheckLanguage] = React.useState(true);
     const [checkMail, setCheckMail] = React.useState(true);
     const [checkPhone, setCheckPhone] = React.useState(true);

     const [change, setChange] = React.useState(localStorage.getItem(props.keyName) || "");

     React.useEffect(() => {
          if(props.hasSubmitted) {
               if(!checkMail || !checkLanguage || !checkLength || !checkPhone) {
                    setError(true);
               } else {
                    setError(false);
               }
          }
     });

     React.useEffect(() => {
          if(error) {
               props.setInputsError(oldValue => oldValue == 4 ? oldValue : oldValue + 1);
          } else {
               props.setInputsError(oldValue => oldValue == -4 ? oldValue : oldValue - 1);
          }
     }, [error]);

     //Validate length and emptiness
     function validateLength() {
          if(change == null || change.length <= 1) {
               setCheckLength(false);
          } else {
               setCheckLength(true);
          }
     }

     //Validate georgian language
     function validateLanguage() {
          if(props.keyName == 'name' || props.keyName == 'lastname') {
               for(let i = 0; i <= change.length; i++) {
                    if(change[i] < 'ა' || change[i] > 'ჰ') {
                         setCheckLanguage(false);
                         break;
                    }
                    setCheckLanguage(true);
               }
          }
     }

     //Validate @redberry.ge
     function validateMail() {
          if(props.type == 'mail') {
               //Check if the mail ends with @redberry.ge
               if(change.substr(change.length - 12) != "@redberry.ge") {
                    setCheckMail(false);
               } else {
                    setCheckMail(true);
               }
          }
     }

     //Validate georgian number
     function validatePhonePattern() {
          //Georgian phone number format in regexp
          const regex = new RegExp("^[\+]?[9-9]{2}[5][ ]?[0-9]{3}[ ]?[0-9]{2}[ ]?[0-9]{2}[ ]?[0-9]{2}$");

          if(props.type == "tel") {
               if(!change.match(regex)) {
                    setCheckPhone(false);
               } else {
                    setCheckPhone(true);
               }
          }
     }

     function handleChange(event) {
          localStorage.setItem(props.keyName, event.target.value);
          setChange(event.target.value);
     }
     React.useEffect(() => {
          validateLength();
          validateLanguage();
          validateMail();
          validatePhonePattern();
     }, [props.hasSubmitted]);

     return (
          <InputFieldsStyled error = {error}>
               <label>{props.label}</label>
               <input
                    onChange = {(event) => handleChange(event)}
                    type = {props.type}
                    value = {localStorage.getItem(props.keyName)}
               />
               <p>{props.description}</p>
          </InputFieldsStyled>
     )
}

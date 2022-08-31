import React from 'react'
import styled from 'styled-components'

const RadiosStyled = styled.div`
     display: flex;
     flex-direction: column;

     gap: 1.25rem;
     @media(min-width: 1200px) {
          width: 10%;
          flex-grow: 1;
     }
`

const HeaderLabelStyled = styled.label`
     font-size: 18px;
     font-weight: bold;
     position: relative;
     color: ${props => props.hasSubmitted && props.change == 0 ? "#E52F2F" : "black"};
     > span {
          padding-left: 2rem;
          > img {
               width: 22px;
               position: absolute;
          }
     }

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
const InputStyled = styled.input`
     width: 20px;
     height: 20px;
     border-radius: 50%;
     outline: none;
     border: 2px solid #4D9AC3;
     appearance: none;
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
     &:checked:before {
          top: 50%;
     }
`


export default function Radios(props) {
     const [change, setChange] = React.useState(localStorage.getItem(props.keyName) || 0);

     function handleChange(event) {
          setChange(event.target.value);
          localStorage.setItem(props.keyName, event.target.value);
     }

     React.useEffect(() => {
          if(props.hasSubmitted && !localStorage.getItem(props.keyName)) {
               props.setRadioError(oldValue => oldValue == 2 ? oldValue : oldValue + 1);
          } else {
               props.setRadioError(oldValue => oldValue == -2 ? oldValue : oldValue - 1);
          }
     });

     return (
          <RadiosStyled>
               <HeaderLabelStyled
                    change = {change}
                    hasSubmitted = {props.hasSubmitted}
               >
                    {props.name}
                    {props.hasSubmitted ? change == 0 && <span><img src = "./images/warning.png" /></span> : ''}
               </HeaderLabelStyled>
               <RadiosWrapperStyled>
                    <div>
                         {
                              change == props.option1 ?
                              <InputStyled
                                   name = {props.keyName}
                                   type = "radio"
                                   id = {props.option1}
                                   value = {props.option1}
                                   onChange = {event => handleChange(event)}
                                   checked
                              /> :
                              <InputStyled
                                   name = {props.keyName}
                                   type = "radio"
                                   id = {props.option1}
                                   value = {props.option1}
                                   onChange = {event => handleChange(event)}
                              />
                         }

                         <label htmlFor = {props.option1}>{props.option1 == 'new' ? 'ახალი' : props.option1}</label>
                    </div>
                    <div>
                         {
                              change == props.option2 ?
                              <InputStyled
                                   name = {props.keyName}
                                   type = "radio"
                                   id = {props.option2}
                                   value = {props.option2}
                                   onChange = {event => handleChange(event)}
                                   checked
                              /> :
                              <InputStyled
                                   name = {props.keyName}
                                   type = "radio"
                                   id = {props.option2}
                                   value = {props.option2}
                                   onChange = {event => handleChange(event)}
                              />

                         }

                         <label htmlFor = {props.option2}>{props.option2 == 'used' ? 'მეორადი' : props.option2}</label>
                    </div>

               </RadiosWrapperStyled>
          </RadiosStyled>
     )

}

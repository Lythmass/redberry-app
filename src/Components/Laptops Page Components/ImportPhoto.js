import React from 'react'
import styled from 'styled-components'

const ImportPhotoStyled = styled.div`
     width: 358px;
     height: 244px;

     margin: 0 0 2rem 0;

     border: 2px dashed ${props => props.hasSubmitted && props.change == "./images/camera.png"? '#E52F2F' : '#4386A9'};
     border-radius: 8px;

     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;

     position: relative;
     > label {
          cursor: pointer;

          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          gap: 21px;

          text-align: center;

          color: ${props => props.hasSubmitted && props.change == "./images/camera.png"? '#E52F2F' : '#4386A9'};
          > img {
               width: ${props => props.change != "./images/camera.png" ? `358px` : "54px"};
               height: ${props => props.change != "./images/camera.png" && `244px`};
               position: ${props => props.change != "./images/camera.png" && 'absolute'};
               object-fit: cover;
          }
     }

     > input {
          display: none;
     }

`

const WarningStyled = styled.img`
     position: absolute;
     bottom: 1.25rem;
     width: 23px;
`


export default function ImportPhoto(props) {
     const [change, setChange] = React.useState("./images/camera.png");

     React.useEffect(() => {
          if(localStorage.getItem("photo")) {
               setChange(JSON.parse(localStorage.getItem("photo")));
          }
     }, []);

     function handleChange(event) {
          const file = event.target.files[0];
          const reader = new FileReader();
          reader.onload = function(event) {
               setChange(event.target.result);
               localStorage.setItem("photo", JSON.stringify(event.target.result));
          }
          reader.readAsDataURL(file);
     }

     return (
          <ImportPhotoStyled hasSubmitted = {props.hasSubmitted} change = {change}>
               <label htmlFor = "photo">
                    <img src = {change} />
                    ლეპტოპის ფოტოს <br /> ატვირთვა
               </label>
               <input
                    onChange = {(event) => handleChange(event)}
                    id = "photo" type = "file"
                    accept="image/*"
               />
               {
                    props.hasSubmitted && change == "./images/camera.png" ?
                    <WarningStyled src = "./images/warning.png" /> : ""
               }
          </ImportPhotoStyled>
     )
}

import React from 'react'
import styled from 'styled-components'

import ImportAgain from './ImportAgain.js'

const ImportPhotoStyled = styled.div`
     width: 358px;
     height: 244px;

     border: 2px dashed ${props => props.hasSubmitted && props.change == "./images/camera.png"? '#E52F2F' : '#4386A9'};
     border-radius: 8px;

     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;

     background-color: ${props => props.hasSubmitted && props.change == './images/camera.png' ? 'hsl(0, 78%, 54%, 0.1)' : '#F6F6F6'};

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

     @media(min-width: 1200px) {
          width: 878px;
          height: 423px;
          > label {
               > p {
                    font-weight: bold;
                    line-height: 38px;
               }
               font-size: 20px;
               display: flex;
               flex-direction: column-reverse;
               gap: 3rem;
               > img {
                    width: ${props => props.change != "./images/camera.png" && `878px`};
                    height: ${props => props.change != "./images/camera.png" && `423px`};
                    position: ${props => props.change != "./images/camera.png" && 'absolute'};
                    object-fit: cover;
               }
          }
     }
`

const WarningStyled = styled.img`
     position: absolute;
     bottom: 1.25rem;
     width: 23px;
     @media(min-width: 1200px) {
          width: 38px;
          top: 3rem;
     }
`
const UploadButton = styled.div`
     width: 233px;
     background-color: #62A1EB;
     color: #fff;
     height: 60px;
     display: flex;
     justify-content: center;
     align-items: center;
     border-radius: 8px;
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


export default function ImportPhoto(props) {
     const [change, setChange] = React.useState("./images/camera.png");
     const [resize, setResize] = React.useState(window.innerWidth >= 1200 ? true : false);
     React.useEffect(() => {
          if(localStorage.getItem("photo")) {
               setChange(JSON.parse(localStorage.getItem("photo")));
          }
     }, []);

     React.useEffect(() => {
          if(props.hasSubmitted && !localStorage.getItem("photo")) {
               props.setPhotoError(oldValue => oldValue == 1 ? oldValue : oldValue + 1);
          } else {
               props.setPhotoError(oldValue => oldValue == -1 ? oldValue : oldValue - 1);
          }
     });

     React.useEffect(() => {

          function handleResize() {
               setResize(() => {
                    return window.innerWidth >= 1200 ? true : false
               });
          }
          window.addEventListener('resize', handleResize)
     }, []);


     function handleChange(event) {
          const file = event.target.files[0];
          props.setImage(file);
          const reader = new FileReader();
          reader.onload = function(event) {
               setChange(event.target.result);
               localStorage.setItem("photo", JSON.stringify(event.target.result));
          }
          reader.readAsDataURL(file);
     }

     return (
          <>
               <ImportPhotoStyled hasSubmitted = {props.hasSubmitted} change = {change}>
               {
                    props.hasSubmitted && change == "./images/camera.png" ?
                    <WarningStyled src = "./images/warning.png" /> : ""
               }
                    <label htmlFor = {change == './images/camera.png' ? "photo" : ''}>
                         {
                              resize && change == "./images/camera.png" ?
                              <UploadButton>ატვირთე</UploadButton> :
                              <img src = {change} />
                         }


                         {
                              resize ? <p>ჩააგდე ან ატვირთე <br /> ლეპტოპის ფოტო</p>
                              : <p>ლეპტოპის ფოტოს <br />ატვირთვა</p>
                         }
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
               {setChange != './images/camera.png' && <ImportAgain setImage = {props.setImage} setChange = {setChange}/>}
          </>

     )
}

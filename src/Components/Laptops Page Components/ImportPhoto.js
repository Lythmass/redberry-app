import React from 'react'
import styled from 'styled-components'

const ImportPhotoStyled = styled.div`
     width: 358px;
     height: 244px;

     border: 2px dashed #4386A9;
     border-radius: 8px;

     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;

     > label {
          cursor: pointer;

          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          gap: 21px;

          text-align: center;

          color: #4386A9;
          > img {
               width: 54px;
          }
     }

     > input {
          display: none;
     }

`
export default function ImportPhoto(props) {
     return (
          <ImportPhotoStyled>
               <label htmlFor = "photo">
                    <img src = "./images/camera.png" />
                    ლეპტოპის ფოტოს <br /> ატვირთვა
               </label>
               <input id = "photo" type = "file" />
          </ImportPhotoStyled>
     )
}

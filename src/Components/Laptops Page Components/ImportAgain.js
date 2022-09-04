import React from 'react'
import styled from 'styled-components'

const ImportAgainStyled = styled.div`
     display: flex;
     align-items: center;
     justify-content: space-between;
     width: 358px;
     margin: 0 0 1rem 0;

     > input {
          display: none;
     }

     @media(min-width: 1200px) {
          width: 878px;
          transform: translateY(-2rem);
     }
`


const UploadButton = styled.div`
     cursor: pointer;
     width: 187px;
     background-color: #62A1EB;
     color: #fff;
     height: 46px;
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

     @media(min-width: 1200px) {
          padding: 1.75rem 0;
     }
`

const ImgStyled = styled.img`
     width: 22px;
`

const DataStyled = styled.div`
     display: flex;
     gap: 1rem;
     align-items: center;
     > div {
          > p {
               color: #5F5F5F;
               font-size: 12px;
          }
          > h4 {
               font-size: 12px;
          }
     }
     @media (min-width: 1200px) {
          > div {
               display: flex;
               align-items: center;
               gap: 1rem;
               > p {
                    font-size: 18px;
               }
               > h4 {
                    font-size: 18px;
               }
          }
     }
`



export default function ImportAgain(props) {

     const [fileSize, setFileSize] = React.useState(localStorage.getItem('size') || '');
     const [fileName, setFileName] = React.useState(localStorage.getItem('fileName') || '');

     function handleChange(event) {
          const file = event.target.files[0];

          props.setImage(file);
          const reader = new FileReader();
          reader.onload = function(event) {
               props.setChange(event.target.result);
               localStorage.setItem("photo", JSON.stringify(event.target.result));
               setFileSize(file.size);
               setFileName(file.name);
          }
          reader.readAsDataURL(file);
     }

     React.useEffect(() => {
          localStorage.setItem('size', fileSize);
          localStorage.setItem('fileName', fileName);
     }, [fileSize, fileName]);

     return(
          <ImportAgainStyled>
               <DataStyled>
                    <ImgStyled src = "./images/check.png" />
                    <div>
                         <h4>{fileName}</h4>
                         <p>{Math.round(fileSize / 1000)} mb</p>
                    </div>
               </DataStyled>
               <label htmlFor = 'again'>

                    <UploadButton>თავიდან ატვირთე</UploadButton>
               </label>
               <input
                    onChange = {(event) => handleChange(event)}
                    id = "again" type = "file"
                    accept="image/*"
               />
          </ImportAgainStyled>
     )
}

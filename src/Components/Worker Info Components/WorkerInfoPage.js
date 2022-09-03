import React from 'react'
import styled from 'styled-components'

import {useNavigate} from "react-router-dom"

import GeneralHeader from '../GeneralHeader.js'
import InputFields from '../InputFields.js'
import DropDowns from './DropDowns.js'
import NextButton from '../NextButton.js'

const WorkerInfoPageStyled = styled.section`
     display: flex;
     flex-direction: column;
     width: 100%;
     align-items: center;
     justify-content: center;

     @media(min-width: 1200px) {
          background-color: #F6F6F6;
     }

     > img {
          padding: 3rem 0;
          width: 80px;
     }
`

const FormStyled = styled.form`
     display: flex;
     flex-direction: column;
     gap: 1rem;
     margin: 50px 0 0;
     @media(min-width: 1200px) {
          background-color: #fff;
          padding: 3rem 7rem 0;
          border-radius: 18px;
     }
`

const FirstLastNameStyled = styled.div`
     display: flex;
     flex-direction: column;
     gap: 1rem;
     @media(min-width: 1200px) {
          flex-direction: row;
     }
`

export default function WorkerInfoPage() {
     const [teamsId, setTeamsId] = React.useState(localStorage.getItem("teamId") || '');
     const [hasSubmitted, setHasSubmitted] = React.useState(0);
     const [inputsError, setInputsError] = React.useState(0);
     const [dropDownsError, setDropDownsError] = React.useState(0);
     const [refresh, setRefresh] = React.useState(false);
     const goToLaptopsPage = useNavigate();

     const [resize, setResize] = React.useState(window.innerWidth);

     React.useEffect(() => {
          function handleResize() {
               setResize(window.innerWidth);
          }
          window.addEventListener('resize', handleResize)
     }, []);

     function handleSubmit(event) {
          event.preventDefault();
          setHasSubmitted(oldValue => oldValue + 1);
          setTimeout(() => {
               setRefresh(oldValue => !oldValue);
          }, 100);

     }
     React.useEffect(() => {
          if(hasSubmitted > 0) {
               if(inputsError == -4 && dropDownsError == -2) {
                    goToLaptopsPage("/laptopspage");
               }
          }
     }, [refresh]);
     return (
          <WorkerInfoPageStyled>

               { /* Heading */}
               <GeneralHeader
                    text = "თანამშრომლის ინფო"
                    text2 = "ლეპტოპის მახასიათებლები"
                    numOfPage = "1/2"
                    goBack = "/"
               />

               {/* Inputs and DropDowns*/}
               <FormStyled encType='multipart/form-data' onSubmit = {(event) => handleSubmit(event)}>
                    <FirstLastNameStyled>
                         <InputFields
                              type = "text"
                              label = "სახელი"
                              description = "მინიმუმ 2 სიმბოლო, ქართული ასოები"
                              keyName = "name"
                              hasSubmitted = {hasSubmitted}
                              setInputsError = {setInputsError}
                              width = "463px"
                         />
                         <InputFields
                              type = "text"
                              label = "გვარი"
                              description = "მინიმუმ 2 სიმბოლო, ქართული ასოები"
                              keyName = "lastname"
                              hasSubmitted = {hasSubmitted}
                              setInputsError = {setInputsError}
                              width = "463px"
                         />
                    </FirstLastNameStyled>

                    <DropDowns
                         name = "თიმი"
                         api = 'teams'
                         setTeamsId = {setTeamsId}
                         keyName = "team"
                         hasSubmitted = {hasSubmitted}
                         setDropDownsError = {setDropDownsError}
                         width = "926px"
                    />
                    <DropDowns
                         name = "პოზიცია"
                         api = 'positions'
                         teamsId = {teamsId}
                         keyName = "position"
                         hasSubmitted = {hasSubmitted}
                         setDropDownsError = {setDropDownsError}
                         width = "926px"
                    />
                    <InputFields
                         type = "email"
                         label = "მეილი"
                         description = "უნდა მთავრდებოდეს @redberry.ge-ით"
                         keyName = "mail"
                         hasSubmitted = {hasSubmitted}
                         setInputsError = {setInputsError}
                         width = "926px"
                    />
                    <InputFields
                         type = "tel"
                         label = "ტელეფონის ნომერი"
                         description = "ქართული მობ-ნომრის ფორმატი"
                         keyName = "phone"
                         hasSubmitted = {hasSubmitted}
                         setInputsError = {setInputsError}
                         width = "926px"
                    />
                    <NextButton type = "submit" text = "შემდეგი" />

               </FormStyled>
               {window.innerWidth >= 1200 && <img src = "./images/logo2.png" />}
          </WorkerInfoPageStyled>
     )
}

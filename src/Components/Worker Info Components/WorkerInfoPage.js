import React from 'react'
import styled from 'styled-components'

import GeneralHeader from '../GeneralHeader.js'
import InputFields from './InputFields.js'
import DropDowns from './DropDowns.js'
import NextButton from './NextButton.js'

const WorkerInfoPageStyled = styled.section`
     display: flex;
     flex-direction: column;
     width: 100%;
     align-items: center;
     justify-content: center;
`

const FormStyled = styled.form`
     display: flex;
     flex-direction: column;
     gap: 1rem;
     margin: 50px 0 0;
`

export default function WorkerInfoPage() {
     const [teamsId, setTeamsId] = React.useState(localStorage.getItem("teamId"));
     const [hasSubmitted, setHasSubmitted] = React.useState(0);

     function handleSubmit(event) {
          event.preventDefault();
          setHasSubmitted(oldValue => oldValue + 1);
     }
     return (
          <WorkerInfoPageStyled>

               { /* Heading */}
               <GeneralHeader
                    text = "თანამშრომლის ინფო"
                    numOfPage = "1/2"
                    goBack = "/"
               />

               {/* Inputs and DropDowns*/}
               <FormStyled onSubmit = {(event) => handleSubmit(event)}>
                    <InputFields
                         type = "text"
                         label = "სახელი"
                         description = "მინიმუმ 2 სიმბოლო, ქართული ასოები"
                         keyName = "name"
                         hasSubmitted = {hasSubmitted}
                    />
                    <InputFields
                         type = "text"
                         label = "გვარი"
                         description = "მინიმუმ 2 სიმბოლო, ქართული ასოები"
                         keyName = "lastname"
                         hasSubmitted = {hasSubmitted}
                    />
                    <DropDowns
                         name = "თიმი"
                         api = 'teams'
                         setTeamsId = {setTeamsId}
                         keyName = "team"
                         hasSubmitted = {hasSubmitted}
                    />
                    <DropDowns
                         name = "პოზიცია"
                         api = 'positions'
                         teamsId = {teamsId}
                         keyName = "position"
                         hasSubmitted = {hasSubmitted}
                    />
                    <InputFields
                         type = "mail"
                         label = "მეილი"
                         description = "უნდა მთავრდებოდეს @redberry.ge-ით"
                         keyName = "mail"
                         hasSubmitted = {hasSubmitted}
                    />
                    <InputFields
                         type = "tel"
                         label = "ტელეფონის ნომერი"
                         description = "ქართული მობ-ნომრის ფორმატი"
                         keyName = "phone"
                         hasSubmitted = {hasSubmitted}
                    />
                    <NextButton type = "submit" text = "შემდეგი" />

               </FormStyled>
          </WorkerInfoPageStyled>
     )
}

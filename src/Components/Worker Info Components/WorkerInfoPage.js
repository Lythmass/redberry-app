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

     function handleSubmit() {
          localStorage.clear();
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
               <FormStyled onSubmit = {handleSubmit}>
                    <InputFields
                         type = "text"
                         label = "სახელი"
                         description = "მინიმუმ 2 სიმბოლო, ქართული ასოები"
                         keyName = "name"
                    />
                    <InputFields
                         type = "text"
                         label = "გვარი"
                         description = "მინიმუმ 2 სიმბოლო, ქართული ასოები"
                         keyName = "lastname"
                    />
                    <DropDowns
                         name = "თიმი"
                         api = 'teams'
                         setTeamsId = {setTeamsId}
                         keyName = "team"
                    />
                    <DropDowns
                         name = "პოზიცია"
                         api = 'positions'
                         teamsId = {teamsId}
                         keyName = "position"
                    />
                    <InputFields
                         type = "mail"
                         label = "მეილი"
                         description = "უნდა მთავრდებოდეს @redberry.ge-ით"
                         keyName = "mail"
                    />
                    <InputFields
                         type = "tel"
                         label = "ტელეფონის ნომერი"
                         description = "ქართული მობ-ნომრის ფორმატი"
                         pattern="{5}-[0-9][0-9]-[0-9][0-9]-[0-9][0-9]-[0-9][0-9]"
                         keyName = "phone"
                    />
                    <NextButton type = "submit" text = "შემდეგი" />

               </FormStyled>
          </WorkerInfoPageStyled>
     )
}

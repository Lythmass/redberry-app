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
     const [teamsId, setTeamsId] = React.useState(0);
     return (
          <WorkerInfoPageStyled>

               { /* Heading */}
               <GeneralHeader
                    text = "თანამშრომლის ინფო"
                    numOfPage = "1/2"
                    goBack = "/"
               />

               {/* Inputs and DropDowns*/}
               <FormStyled>
                    <InputFields
                         type = "text"
                         label = "სახელი"
                         description = "მინიმუმ 2 სიმბოლო, ქართული ასოები"
                    />
                    <InputFields
                         type = "text"
                         label = "გვარი"
                         description = "მინიმუმ 2 სიმბოლო, ქართული ასოები"
                    />
                    <DropDowns
                         name = "თიმი"
                         api = 'teams'
                         setTeamsId = {setTeamsId}
                    />
                    <DropDowns
                         name = "პოზიცია"
                         api = 'positions'
                         teamsId = {teamsId}
                    />
                    <InputFields
                         type = "mail"
                         label = "მეილი"
                         description = "უნდა მთავრდებოდეს @redberry.ge-ით"
                    />
                    <InputFields
                         type = "tel"
                         label = "ტელეფონის ნომერი"
                         description = "ქართული მობ-ნომრის ფორმატი"
                         pattern="{5}-[0-9][0-9]-[0-9][0-9]-[0-9][0-9]-[0-9][0-9]"
                    />
               </FormStyled>
               <NextButton text = "შემდეგი" />
          </WorkerInfoPageStyled>
     )
}

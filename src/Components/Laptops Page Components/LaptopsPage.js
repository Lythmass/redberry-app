import React from 'react'
import styled from 'styled-components'

import {useNavigate} from "react-router-dom"

import GeneralHeader from '../GeneralHeader.js'
import ImportPhoto from './ImportPhoto.js'
import InputFields from '../InputFields.js'
import NextButton from '../NextButton.js'
import DropDowns from './DropDowns.js'
import Radios from './Radios.js'
import BackTextButton from './BackTextButton.js'

const LaptopsPageStyled = styled.section`
     display: flex;
     justify-content: center;
     flex-direction: column;
     align-items: center;
`

const FormStyled = styled.form`
     display: flex;
     justify-content: center;
     flex-direction: column;
     align-items: center;
     gap: 1rem;
     padding-top: 2rem;
     margin: 0 0 2rem 0;
`

const ButtonsWrapper = styled.div`
     width: 100%;
     display: flex;
     align-items: center;
     justify-content: space-between;
`

export default function LaptopsPage(props) {
     const [hasSubmitted, setHasSubmitted] = React.useState(0);

     //Check errors for each type of field
     const [inputsError, setInputsError] = React.useState(0);
     const [dropDownsError, setDropDownsError] = React.useState(0);
     const [radioError, setRadioError] = React.useState(0);
     const [photoError, setPhotoError] = React.useState(0);

     const [refresh, setRefresh] = React.useState(false);
     const goToSuccessPage = useNavigate();

     function handleSubmit(event) {
          event.preventDefault();
          setHasSubmitted(oldValue => oldValue + 1);
          setTimeout(() => {
               setRefresh(oldValue => !oldValue);
          }, 100);
     }
     React.useEffect(() => {
          if(hasSubmitted > 0) {
               if(inputsError == -4 && dropDownsError == -2 && radioError == -2 && photoError == -1) {
                    goToSuccessPage("/successpage");
               }
          }
     }, [refresh]);
     return (
          <LaptopsPageStyled>
               <GeneralHeader
                    text = "თანამშრომლის ინფო"
                    text2 = "ლეპტოპის მახასიათებლები"
                    numOfPage = "2/2"
                    goBack = "/workerinfo"
               />
               <FormStyled onSubmit = {(event) => handleSubmit(event)}>
                    <ImportPhoto
                         hasSubmitted = {hasSubmitted}
                         setPhotoError = {setPhotoError}
                    />
                    <InputFields
                         type = "text"
                         label = "ლეპტოპის სახელი"
                         description = "ლათინური ასოები, ციფრები, !@#$%^&*()_+="
                         keyName = "laptopName"
                         hasSubmitted = {hasSubmitted}
                         setInputsError = {setInputsError}
                         width = "463px"
                    />
                    <DropDowns
                         name = "ლეპტოპის ბრენდი"
                         api = 'brands'
                         keyName = "brands"
                         hasSubmitted = {hasSubmitted}
                         setDropDownsError = {setDropDownsError}
                         width = "926px"
                    />
                    <DropDowns
                         name = "CPU"
                         api = 'cpus'
                         keyName = "cpus"
                         hasSubmitted = {hasSubmitted}
                         setDropDownsError = {setDropDownsError}
                         width = "926px"
                    />
                    <InputFields
                         type = "number"
                         label = "CPU-ს ბირთვი"
                         description = "მხოლოდ ციფრები"
                         keyName = "cores"
                         hasSubmitted = {hasSubmitted}
                         setInputsError = {setInputsError}
                         width = "463px"
                    />
                    <InputFields
                         type = "number"
                         label = "CPU-ს ნაკადი"
                         description = "მხოლოდ ციფრები"
                         keyName = "thread"
                         hasSubmitted = {hasSubmitted}
                         setInputsError = {setInputsError}
                         width = "463px"
                    />
                    <InputFields
                         type = "number"
                         label = "ლეპტოპის RAM (GB)"
                         description = "მხოლოდ ციფრები"
                         keyName = "ram"
                         hasSubmitted = {hasSubmitted}
                         setInputsError = {setInputsError}
                         width = "463px"
                    />
                    <Radios
                         name = "მეხსიერების ტიპი"
                         keyName = "disk"
                         option1 = "SSD"
                         option2 = "HDD"
                         hasSubmitted = {hasSubmitted}
                         setRadioError = {setRadioError}
                    />
                    <InputFields
                         type = "date"
                         label = "შექმნის რიცხვი (არჩევითი)"
                         keyName = "date"
                         hasSubmitted = {hasSubmitted}
                         width = "463px"
                    />
                    <InputFields
                         type = "number"
                         label = "ლეპტოპის ფასი"
                         description = "მხოლოდ ციფრები"
                         keyName = "price"
                         hasSubmitted = {hasSubmitted}
                         setInputsError = {setInputsError}
                         width = "463px"
                    />
                    <Radios
                         name = "ლეპტოპის მდგომარეობა"
                         keyName = "newold"
                         option1 = "ახალი"
                         option2 = "მეორადი"
                         hasSubmitted = {hasSubmitted}
                         setRadioError = {setRadioError}
                    />
                    <ButtonsWrapper>
                         <BackTextButton text = "უკან" />
                         <NextButton
                              type = "submit"
                              text = "დამახსოვრება"
                              width = "162px"
                         />
                    </ButtonsWrapper>
               </FormStyled>
          </LaptopsPageStyled>
     )
}

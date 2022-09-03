import React from 'react'
import styled from 'styled-components'

import {useNavigate} from "react-router-dom"

import GeneralHeader from '../GeneralHeader.js'
import ImportPhoto from './ImportPhoto.js'
import InputFields from '../InputFields.js'
import NextButton from '../NextButton.js'
import DropDowns from './DropDowns.js'
import Radios from './Radios.js'
import BackTextButton from '../BackTextButton.js'

const LaptopsPageStyled = styled.section`
     display: flex;
     width: 100%;
     justify-content: center;
     flex-direction: column;
     align-items: center;

     @media(min-width: 1200px) {
          background-color: #F6F6F6;
     }
`

const FormStyled = styled.form`
     display: flex;
     justify-content: center;
     flex-direction: column;
     align-items: center;
     gap: 1rem;
     padding-top: 2rem;
     margin: 0 0 2rem 0;
     > hr {
          display: none;
     }

     @media(min-width: 1200px) {
          background-color: #fff;
          padding: 3rem 7rem 0;
          border-radius: 18px;
          margin-top: 3rem;
          min-width: 878px;
          gap: 2.75rem;
          > hr {
               margin: 1rem 0;
               display: block;
               width: 100%;
               border-color: hsl(0, 100%, 1%, 0.2);
          }
     }
`

const ButtonsWrapper = styled.div`
     width: 100%;
     display: flex;
     align-items: center;
     justify-content: space-between;
`

const InputsWrapper = styled.div`
     display: flex;
     flex-direction: column;
     width: 100%;
     gap: 1rem;
     justify-content: center;
     @media (min-width: 1200px) {
          display: flex;
          flex-direction: row;
          width: 100%;
          gap: 2rem;

          align-items: center;
          justify-content: center;

     }
`

const LogoStyled = styled.img`
     display: none;
     width: 85px;
     padding: 0 0 3rem 0;
     @media(min-width: 1200px) {
          display: block;
     }
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
               <FormStyled encType='multipart/form-data' onSubmit = {(event) => handleSubmit(event)}>
                    <ImportPhoto
                         hasSubmitted = {hasSubmitted}
                         setPhotoError = {setPhotoError}
                         setImage = {props.setImage}
                    />
                    <InputsWrapper>
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
                              width = "395px"
                         />
                    </InputsWrapper>
                    <hr />
                    <InputsWrapper>
                         <DropDowns
                              name = "CPU"
                              api = 'cpus'
                              keyName = "cpus"
                              hasSubmitted = {hasSubmitted}
                              setDropDownsError = {setDropDownsError}
                              width = "463px"
                         />
                         <InputFields
                              type = "number"
                              label = "CPU-ს ბირთვი"
                              description = "მხოლოდ ციფრები"
                              keyName = "cores"
                              hasSubmitted = {hasSubmitted}
                              setInputsError = {setInputsError}
                              width = "395px"
                         />
                         <InputFields
                              type = "number"
                              label = "CPU-ს ნაკადი"
                              description = "მხოლოდ ციფრები"
                              keyName = "thread"
                              hasSubmitted = {hasSubmitted}
                              setInputsError = {setInputsError}
                              width = "395px"
                         />
                    </InputsWrapper>
                    <InputsWrapper>
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

                    </InputsWrapper>
                    <hr />
                    <InputsWrapper>
                         <InputFields
                              type = "text"
                              label = "შეძენის რიცხვი (არჩევითი)"
                              keyName = "date"
                              hasSubmitted = {hasSubmitted}
                              pattern = "^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$"
                              description = "თარიღი"
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
                    </InputsWrapper>
                    <InputsWrapper>
                         <Radios
                              name = "ლეპტოპის მდგომარეობა"
                              keyName = "newold"
                              option1 = "new"
                              option2 = "used"
                              hasSubmitted = {hasSubmitted}
                              setRadioError = {setRadioError}
                         />
                    </InputsWrapper>
                    <ButtonsWrapper>
                         <BackTextButton
                              to = '/workerinfo'
                              text = "უკან"
                              fontSize = "16px"
                         />
                         <NextButton
                              type = "submit"
                              text = "დამახსოვრება"
                              width = "162px"
                         />
                    </ButtonsWrapper>
               </FormStyled>
               <LogoStyled src = "./images/logo2.png" />
          </LaptopsPageStyled>
     )
}

import React from 'react'
import styled from 'styled-components'

import GeneralHeader from '../GeneralHeader.js'
import ImportPhoto from './ImportPhoto.js'

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
`

export default function LaptopsPage(props) {
     return (
          <LaptopsPageStyled>
               <GeneralHeader
                    text = "თანამშრომლის ინფო"
                    text2 = "ლეპტოპის მახასიათებლები"
                    numOfPage = "2/2"
                    goBack = "/workerinfo"
               />
               <FormStyled>
                    <ImportPhoto />
               </FormStyled>
          </LaptopsPageStyled>
     )
}

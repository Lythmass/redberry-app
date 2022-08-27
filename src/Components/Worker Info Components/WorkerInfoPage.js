import React from 'react'
import styled from 'styled-components'

import GeneralHeader from '../GeneralHeader.js'

const WorkerInfoPageStyled = styled.section`
     display: flex;
     flex-directoin: column;
     align-items: center;
     justify-content: center;
`

export default function WorkerInfoPage() {
     return (
          <WorkerInfoPageStyled>

               { /* Heading */}
               <GeneralHeader
                    text = "თანამშრომლის ინფო"
                    numOfPage = "1/2"
               />
          </WorkerInfoPageStyled>
     )
}

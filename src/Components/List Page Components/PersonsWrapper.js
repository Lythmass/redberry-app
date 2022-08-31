import React from 'react'
import styled from 'styled-components'

import EachPerson from './EachPerson.js'

const PersonsWrapperStyled = styled.div`
     margin: 2rem 0;
     display: flex;
     justify-content: center;
     align-items: center;
     width: 100%;
     gap: 2rem;
`

const AlignWrapper = styled.div`
     display: flex;
     justify-content: center;
     flex-direction: column;
     align-items: center;
     gap: 2rem;
     @media (min-width: 1200px) {
          width: 1146px;
          flex-flow: row wrap;
          justify-content: flex-start;
     }
`

export default function PersonsWrapper(props) {

     const listInfo = props.info.map(eachInfo => {
          return (
               <EachPerson
                    name = {eachInfo.user.name}
                    surname = {eachInfo.user.surname}
                    laptop_name = {eachInfo.laptop.name}
                    image = {eachInfo.laptop.image}
                    key = {eachInfo.laptop.id}
               />
          )
     });


     return (
          <PersonsWrapperStyled>
               <AlignWrapper>
                    {listInfo}

               </AlignWrapper>
          </PersonsWrapperStyled>
     )
}

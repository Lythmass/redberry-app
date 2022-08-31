import React from 'react'
import styled from 'styled-components'

import EachPerson from './EachPerson.js'

const PersonsWrapperStyled = styled.div`
     margin-top: 2rem;
     display: flex;
     justify-content: center;
     flex-direction: column;
     align-items: center;

     gap: 2rem;
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
               {listInfo}
          </PersonsWrapperStyled>
     )
}

import React from 'react'
import styled from 'styled-components'

import { Link } from 'react-router-dom'

const EachPersonStyled = styled.div`
     width: 358px;
     height: 123px;

     display: flex;
     justify-content: space-between;
     align-items: center;
     gap: 2rem;

     border: 1px solid #AED1EA;
     border-radius: 10px;

     padding: 0 0.5rem;

     background-color: #EAFAFF;
     @media(min-width: 1200px) {
          flex-basis: 48%;
          height: 195px;
          width: auto;
     }


`
const ImageStyled = styled.img`
     width: 177px;
     height: 108px;
     object-fit: cover;
     border-radius: 10px;
     @media(min-width: 1200px) {
          width: 266px;
          height: 178px;
     }
`

const ShortInfoStyled = styled.div`

     display: flex;

     align-items: flex-start;
     width: 50%;
     flex-direction: column;
     gap: 0.5rem;
     @media(min-width: 1200px) {
          > p:nth-child(2) {
               margin-bottom: 1.4rem;
          }
     }
`

export default function EachPerson(props) {
     return (
          <EachPersonStyled>
               <ImageStyled src = {`https://pcfy.redberryinternship.ge${props.image}`} />
               <ShortInfoStyled>
                    <p
                         style = {{fontWeight: 'bold', fontSize: '14px'}}
                    >
                         {props.name} {props.surname}
                    </p>
                    <p   style = {{fontSize: '18px', paddingBottom: '0.5rem'}}
                    >
                         {props.laptop_name}
                    </p>
                    <Link
                         to = '/'
                         style = {{color: '#4386A9'}}
                    >
                         მეტის ნახვა
                    </Link>

               </ShortInfoStyled>
          </EachPersonStyled>
     )
}

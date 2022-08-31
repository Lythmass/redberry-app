import React from 'react'
import styled from 'styled-components'

import { Link } from 'react-router-dom'

const EachPersonStyled = styled.div`
     width: 358px;
     height: 150px;

     display: flex;
     justify-content: space-between;
     align-items: center;
     gap: 2rem;

     border: 1px solid #AED1EA;
     border-radius: 10px;

     padding: 0 0.6rem;

     background-color: #EAFAFF;

`
const ImageStyled = styled.img`
     width: 177px;
     height: 130px;
     object-fit: cover;
     border-radius: 10px;
`

const ShortInfoStyled = styled.div`

     display: flex;

     align-items: flex-start;
     width: 50%;
     flex-direction: column;
     gap: 0.5rem;
`

export default function EachPerson(props) {
     return (
          <EachPersonStyled>
               <ImageStyled src = {`https://pcfy.redberryinternship.ge${props.image}`} />
               <ShortInfoStyled>
                    <p
                         style = {{fontWeight: 'bold', fontSize: '15px'}}
                    >
                         {props.name} {props.surname}
                    </p>
                    <p   style = {{fontSize: '22px', paddingBottom: '0.5rem'}}
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

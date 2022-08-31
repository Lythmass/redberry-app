import React from 'react'
import styled from 'styled-components'

import GeneralHeader from '../GeneralHeader.js'
import PersonsWrapper from './PersonsWrapper.js'

const ListPageStyled = styled.section`
     display: flex;
     align-items: center;
     flex-direction: column;

     min-height: 100vh;
     width: 100%;
`


export default function ListPage() {

     const [info, setInfo] = React.useState({});

     React.useEffect(() => {
          fetch('https://pcfy.redberryinternship.ge/api/laptops?token=147d5d75e2bbc7e97ddee819aa492588')
          .then(response => response.json())
          .then(data => setInfo(data.data));
     }, []);

     return (
          <ListPageStyled>
               <GeneralHeader
                    text = "ჩანაწერების სია"
                    goBack = "/"
               />
               {Object.keys(info).length > 0 && <PersonsWrapper info = {info}/>}
          </ListPageStyled>
     )
}

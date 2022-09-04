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


export default function ListPage(props) {

     const [info, setInfo] = React.useState({});

     React.useEffect(() => {
          fetch('https://pcfy.redberryinternship.ge/api/laptops?token=0a132ad7a0bb16632546912fba9583c6')
          .then(response => response.json())
          .then(data => setInfo(data.data));
     }, []);

     React.useEffect(() => {
          if(Object.keys(info).length > 0) {
               props.setPageCounter(oldValue => {
                    return info.map(eachId => {
                         return eachId.laptop.id;
                    });
               });
          }
     }, [info]);

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

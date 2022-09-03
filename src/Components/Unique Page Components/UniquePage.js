import React from 'react'
import styled from 'styled-components'

import { browserHistory } from 'react-router'

import GeneralHeader from '../GeneralHeader.js'
import TopInfo from './TopInfo.js'
import MiddleInfo from './MiddleInfo.js'
import BottomInfo from './BottomInfo.js'

const UniquePageStyled = styled.section`
     width: 100%;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     > hr {
          margin: 2rem 0;
          display: block;
          width: 358px;
          border-color: hsl(0, 100%, 1%, 0.2);
     }
     @media(min-width: 1200px) {
          > hr {
               width: 1178px;
          }
     }
`

export default function UniquePage(props) {

     const [info, setInfo] = React.useState({});


     React.useEffect(() => {
          fetch(`https://pcfy.redberryinternship.ge/api/laptop/${props.id}?token=431408f3964369382be82953e06778f0`)
          .then(response => response.json())
          .then(data => setInfo(data.data));
     }, []);
     
     return (
          <UniquePageStyled>
               <GeneralHeader
                    text = "ლეპტოპის ინფო"
                    goBack = "/list"
               />
               {Object.keys(info).length > 0 && <TopInfo info = {info} />}
               <hr />
               {Object.keys(info).length > 0 && <MiddleInfo info = {info} />}
               <hr />
               {Object.keys(info).length > 0 && <BottomInfo info = {info} />}
          </UniquePageStyled>
     )
}

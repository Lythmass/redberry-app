import React from 'react'
import styled from 'styled-components'

import GeneralHeader from '../GeneralHeader.js'
import TopInfo from './TopInfo.js'

const UniquePageStyled = styled.section`
     width: 100%;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
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
          </UniquePageStyled>
     )
}

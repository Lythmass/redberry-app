import React from 'react'
import styled from 'styled-components'

import {useNavigate} from "react-router-dom"

import BackTextButton from '../BackTextButton.js'
import SuccessButton from './SuccessButton.js'

const SuccessPageStyled = styled.section`
     display: flex;
     min-height: 100vh;
     justify-content: center;
     flex-direction: column;
     align-items: center;
     text-align: center;
     font-weight: bold;
     > img {
          width: 300px;
     }
     > h1 {
          line-height: 40px;
     }
`

const ButtonsWrapper = styled.div`
     display: flex;
     margin: 10rem 0 0 0;
     flex-direction: column;
`

export default function SuccessPage() {

     const [data, setData] = React.useState({});
     const [refresh, setRefresh] = React.useState(false);
     const [names, setNames] = React.useState(['name', 'lastname',
                                             'teamId', 'positionId',
                                             'phone', 'mail',
                                             'laptopName', 'photo',
                                             'brandId', 'cpus',
                                             'cores', 'thread',
                                             'ram', 'disk',
                                             'newold', 'price']);
     const repeat = useNavigate();
     const toList = useNavigate();

     React.useEffect(() => {
          //Check if any of the input fields is empty
          // for(let i = 0; i < names.length; i++) {
          //      if(localStorage.getItem(names[i]) == null || localStorage.getItem(names[i]) == undefined) {
          //           repeat('/workerinfo'); //Return to the first input page
          //           setRefresh(true);
          //      }
          // }

          setData(() => {
               return {
                    name: localStorage.getItem('name'),
                    surname: localStorage.getItem('lastname'),
                    team_id: localStorage.getItem('teamId'),
                    position_id: localStorage.getItem('positionId'),
                    phone_number: localStorage.getItem('phone'),
                    email: localStorage.getItem('mail'),
                    token: 'c918ee3cd471680b4a9186a55c8caf93',
                    laptop_name: localStorage.getItem('laptopName'),
                    laptop_image: localStorage.getItem('photo'),
                    laptop_brand_id: localStorage.getItem('brandId'),
                    laptop_cpu: localStorage.getItem('cpus'),
                    laptop_cpu_cores: localStorage.getItem('cores'),
                    laptop_threads: localStorage.getItem('thread'),
                    laptop_ram: localStorage.getItem('ram'),
                    laptop_hard_drive_type: localStorage.getItem('disk'),
                    laptop_state: localStorage.getItem('newold'),
                    laptop_purchase_date: localStorage.getItem('date'),
                    laptop_price: localStorage.getItem('price')
               }
          });
          localStorage.clear();
     }, []);

     React.useEffect(() => {
          if(Object.keys(data).length > 0) {
               console.log(data);
          }
     }, [data]);

     return (
          <SuccessPageStyled>
               <img src = "./images/success.png" />
               <h1>ჩანაწერი <br /> დამატებულია!</h1>
               <ButtonsWrapper>
                    <SuccessButton />
                    <BackTextButton
                         text = "მთავარი"
                         to = '/'
                         fontSize = "24px"
                    />
               </ButtonsWrapper>
          </SuccessPageStyled>
     )
}

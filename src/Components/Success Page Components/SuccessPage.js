import React from 'react'
import styled from 'styled-components'

import {useNavigate} from "react-router-dom"

import BackTextButton from '../BackTextButton.js'
import SuccessButton from './SuccessButton.js'

const SuccessPageStyled = styled.section`
     display: flex;
     justify-content: center;
     flex-direction: column;
     align-items: center;

     text-align: center;
     font-weight: bold;

     height: 100vh;

     > img {
          width: 300px;
     }
     > h1 {
          margin: 0 auto;
          padding: 0 3.26rem;
          line-height: 40px;
     }

     @media(min-width: 1200px) {
          background-color: white;
          width: 847px;
          height: 537px;

          border-radius: 8px;
          > img {
               width: 250px;
          }
          > h1 {
               line-height: 0;
               margin-bottom: 4rem;
               padding: 0;
          }
     }
`

const BackgroundStyled = styled.div`
     @media(min-width: 1200px) {
          display: flex;
          justify-content: center;
          height: 100vh;
          align-items: center;
          background-color: hsl(0, 100%, 0%, 0.75);
     }
`

const ButtonsWrapper = styled.div`
     display: flex;
     margin: 10rem 0 0 0;
     flex-direction: column;
     @media(min-width: 1200px) {
          margin: 0;
     }

`

export default function SuccessPage(props) {

     const [object, setObject] = React.useState(false);
     const [info, setInfo] = React.useState({});
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
          for(let i = 0; i < names.length; i++) {
               if(localStorage.getItem(names[i]) == null || localStorage.getItem(names[i]) == undefined) {
                    repeat('/workerinfo'); //Return to the first input page
                    setRefresh(true);
               }
               setObject(true);
          }
     }, []);
     React.useEffect(() => {
          if(object) {

               setInfo(() => {
                    return {
                         'name': localStorage.getItem('name'),
                         'surname': localStorage.getItem('lastname'),
                         'team_id': localStorage.getItem('teamId'),
                         'position_id': localStorage.getItem('positionId'),
                         'phone_number': localStorage.getItem('phone'),
                         'email': localStorage.getItem('mail'),
                         'token': '0a132ad7a0bb16632546912fba9583c6',
                         'laptop_name': localStorage.getItem('laptopName'),
                         'laptop_image': props.image,
                         'laptop_brand_id': localStorage.getItem('brandId'),
                         'laptop_cpu': localStorage.getItem('cpus'),
                         'laptop_cpu_cores': localStorage.getItem('cores'),
                         'laptop_cpu_threads': localStorage.getItem('thread'),
                         'laptop_ram': localStorage.getItem('ram'),
                         'laptop_hard_drive_type': localStorage.getItem('disk'),
                         'laptop_state': localStorage.getItem('newold'),
                         'laptop_purchase_date': localStorage.getItem('date') || '',
                         'laptop_price': localStorage.getItem('price')
                    }
               });
          }

     }, [object]);

     React.useEffect(() => {
          if(Object.keys(info).length > 1) {
               localStorage.clear();
               const form_data = new FormData();
               for(let i = 0; i < Object.keys(info).length; i++) {
                    form_data.append(Object.keys(info)[i], Object.values(info)[i]);
               }
               const requestOptions = {
                    method: 'POST',
                    headers: {
                         'Accept': 'application/json',
                   },
                    body: form_data
               };
               fetch('https://pcfy.redberryinternship.ge/api/laptop/create', requestOptions)
               .then(response => response.json())
               .then(data => console.log(data))
          }
     }, [info]);

     return (
          <BackgroundStyled>
               <SuccessPageStyled>
                    <img src = "./images/success.png" />
                    <h1>ჩანაწერი დამატებულია!</h1>
                    <ButtonsWrapper>
                         <SuccessButton />
                         <BackTextButton
                              text = "მთავარი"
                              to = '/'
                              fontSize = "20px"
                              name = "success"
                         />
                    </ButtonsWrapper>
               </SuccessPageStyled>
          </BackgroundStyled>

     )
}

import React from 'react'
import styled from 'styled-components'

const BottomInfoStyled = styled.div`
     width: 358px;
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;

     gap: 0.5rem;
     > div {
          width: 100%;
          display: flex;
          justify-content: space-between;
          padding-right: 3rem;

          > p {
               font-size: 14px;
               color: #797979;
               width: 166px;
               transform: translateX(2rem);
          }
          > h4 {
               color: #2E2E2E;
               font-size: 14px;
          }
     }

     @media(min-width: 1200px) {
          flex-direction: row;
          width: 1177px;
          justify-content: flex-start;
     }

`

const SectionStyled = styled.section`
     width: 100%;
     display: flex;
     flex-direction: column;
     justify-content: center;

     gap: 0.5rem;
     > div {
          width: 100%;
          display: flex;
          justify-content: space-between;
          padding-right: 3rem;

          > p {
               font-size: 14px;
               color: #797979;
               width: 166px;
               transform: translateX(2rem);
          }
          > h4 {
               color: #2E2E2E;
               font-size: 14px;
          }
     }

     @media(min-width: 1200px) {
          width: 580px;
          gap: 1.25rem;
          align-items: flex-start;
          justify-content: flex-start;
          height: 200px;
          > div {
               width: 100%;
               padding: 0;
               > h4, p {
                    font-size: 22px;
                    width: 300px;
                    transform: translateX(2rem);
               }
          }
     }
`


export default function BottomInfo(props) {
     return (
          <BottomInfoStyled>
               <SectionStyled>
                    <div>
                         <h4>მდგომარეობა:</h4>
                         <p>{props.info.laptop.state == 'new' ? 'ახალი' : 'მეორადი'}</p>
                    </div>
                    <div>
                         <h4>ლეპტოპის ფასი:</h4>
                         <p>{props.info.laptop.price} ₾</p>
                    </div>
               </SectionStyled>
               {props.info.laptop.purchase_date &&
                    <SectionStyled>
                         <div>
                              <h4>შევსების რიცხვი:</h4>
                              <p>{props.info.laptop.purchase_date}</p>
                         </div>
                    </SectionStyled>
               }
          </BottomInfoStyled>
     )
}

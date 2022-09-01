import React from 'react'
import styled from 'styled-components'

const BottomInfoStyled = styled.div`
     width: 358px;
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;

     gap: 0.5rem;

     > img {
          width: 358px;
          padding-bottom: 1.75rem;
     }
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
               font-size: 14px;
          }
     }

`

export default function BottomInfo(props) {
     return (
          <BottomInfoStyled>
               <div>
                    <h4>მდგომარეობა:</h4>
                    <p>{props.info.laptop.state == 'new' ? 'ახალი' : 'მეორადი'}</p>
               </div>
               <div>
                    <h4>ლეპტოპის ფასი:</h4>
                    <p>{props.info.laptop.price} ₾</p>
               </div>
               {props.info.laptop.purchase_date && 

                    <div>
                         <h4>შევსების რიცხვი:</h4>
                         <p>{props.info.laptop.purchase_date}</p>
                    </div>
               }
          </BottomInfoStyled>
     )
}

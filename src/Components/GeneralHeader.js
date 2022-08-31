import React from 'react'
import styled from 'styled-components'

import { Link } from "react-router-dom";

const GeneralHeaderStyled = styled.div`
     margin: 2rem 0 0;
     width: 100%;
     position: relative;
     > div {
          justify-self: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.31rem;
          @media(min-width: 1200px) {
               flex-direction: row;
               justify-content: center;
               gap: 4rem;
               padding: 1.2rem 0;
          }
          > h1 {
               font-weight: bold;
               font-size: 18px;
               line-height: 20px;
               position: relative;
               cursor: default;
               margin: 0;
               @media (min-width: 1200px) {
                    font-size: 25px;
                    font-weight: bold;
                    padding: 0;
                    > span {
                         position: absolute;
                         top: 2rem;
                         left: 0.9rem;
                         > img {
                              width: 90%;
                         }
                    }
               }
          }

          > p {
               font-size: 14px;
               color: #898989;
               margin: 0;
          }



     }
`

const BackButtonStyled = styled.img`
     width: 9.21px;
     height: 16px;
     cursor: pointer;
     position: absolute;
     left: 1.25rem;
     top: 0.25rem;
     @media(min-width: 1200px) {
          width: 2.5rem;
          height: 2.5rem;
          left: 3rem;
     }
`

export default function GeneralTitle(props) {
     const [resize, setResize] = React.useState(window.innerWidth);

     React.useEffect(() => {
          function handleResize() {
               setResize(window.innerWidth);
          }
          window.addEventListener('resize', handleResize)
     }, []);
     return (
          <GeneralHeaderStyled>
               {/* Button to go back */}
               <Link to = {props.goBack}>
                    {
                         resize < 1200 ?
                         <BackButtonStyled src = './images/BackButton.png' /> :
                         <BackButtonStyled src = './images/BackButton2.png' />
                    }


               </Link>
               {window.innerWidth < 1200 ?
                    <div>
                         <h1>{props.numOfPage == '2/2' ? props.text2 : props.text}</h1>
                         <p>{props.numOfPage}</p>
                    </div>
                    :
                    <div>
                         <h1>{props.text}
                              <span>{props.numOfPage == "1/2" && <img src = "./images/Line.png"/>}</span>
                         </h1>
                         <h1>{props.text2}
                              <span>{props.numOfPage == "2/2" && <img src = "./images/Line.png"/>}</span>
                         </h1>
                    </div>
               }
          </GeneralHeaderStyled>
     )
}

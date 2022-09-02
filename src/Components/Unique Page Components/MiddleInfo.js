import React from 'react'
import styled from 'styled-components'

const MiddleInfoStyled = styled.div`
     width: 358px;
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;

     gap: 0.5rem;

     @media (min-width: 1200px) {
          flex-direction: row;
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

export default function MiddleInfo(props) {
     const [brand, setBrand] = React.useState([]);

     React.useEffect(() => {
          fetch('https://pcfy.redberryinternship.ge/api/brands')
          .then(response => response.json())
          .then(data => setBrand(data.data));
     }, []);


     return (
          <MiddleInfoStyled>
               <SectionStyled>
                    <div>
                         <h4>ლეპტოპის სახელი:</h4>
                         <p>{props.info.laptop.name}</p>
                    </div>
                    <div>
                         <h4>ლეპტოპის ბრენდი:</h4>
                         {brand.length > 0 && <p>{brand[props.info.laptop.brand_id - 1].name}</p>}
                    </div>
                    <div>
                         <h4>RAM:</h4>
                         <p>{props.info.laptop.ram}</p>
                    </div>
                    <div>
                         <h4>მეხსიერების ტიპი:</h4>
                         <p>{props.info.laptop.hard_drive_type}</p>
                    </div>
               </SectionStyled>
               <SectionStyled>
                    <div>
                         <h4>CPU:</h4>
                         <p>{props.info.laptop.cpu.name}</p>
                    </div>
                    <div>
                         <h4>CPU-ს ბირთვი:</h4>
                         <p>{props.info.laptop.cpu.cores}</p>
                    </div>
                    <div>
                         <h4>CPU-ს ნაკადი:</h4>
                         <p>{props.info.laptop.cpu.threads}</p>
                    </div>
               </SectionStyled>

          </MiddleInfoStyled>
     )
}

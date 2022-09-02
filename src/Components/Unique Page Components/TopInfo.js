import React from 'react'
import styled from 'styled-components'

const TopInfoStyled = styled.div`
     width: 358px;
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
     margin-top: 2rem;
     gap: 0.5rem;

     > img {
          width: 358px;
          padding-bottom: 1.75rem;
     }
     @media(min-width: 1200px) {
          margin-top: 3rem;
          flex-direction: row;
          justify-content: space-between;
          width: 1178px;
          gap: 4rem;
          > img {
               width: 577px;
               height: 342px;
          }
     }
`

const SectionStyled = styled.section`
     width: 100%;
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
               font-size: 14px;
               color: #2E2E2E;
          }
     }

     @media(min-width: 1200px) {
          gap: 1.25rem;
          > div {
               padding: 0;
               > h4, p {
                    font-size: 22px;
                    width: 300px;
               }
               p {
                    transform: translateX(-2.7rem);
               }
          }
     }
`

export default function TopInfo(props) {
     const [teams, setTeams] = React.useState([]);
     const [position, setPosition] = React.useState([]);

     React.useEffect(() => {
          fetch('https://pcfy.redberryinternship.ge/api/teams')
          .then(response => response.json())
          .then(data => setTeams(data.data));
     }, []);

     React.useEffect(() => {
          fetch('https://pcfy.redberryinternship.ge/api/positions')
          .then(response => response.json())
          .then(data => setPosition(data.data));
     }, []);

     return (
          <TopInfoStyled>
               <img src = {`https://pcfy.redberryinternship.ge${props.info.laptop.image}`} />
               <SectionStyled>
                    <div>
                         <h4>სახელი:</h4>
                         <p>{props.info.user.name} {props.info.user.surname}</p>
                    </div>
                    <div>
                         <h4>თიმი:</h4>
                         {teams.length > 0 && <p>{teams[props.info.user.team_id - 1].name}</p>}
                    </div>
                    <div>
                         <h4>პოზიცია:</h4>
                         {position.length > 0 && <p>{position[props.info.user.position_id - 1].name}</p>}
                    </div>
                    <div>
                         <h4>მეილი:</h4>
                         <p>{props.info.user.email}</p>
                    </div>
                    <div>
                         <h4>ტელ. ნომერი:</h4>
                         <p>{props.info.user.phone_number}</p>
                    </div>
               </SectionStyled>

          </TopInfoStyled>
     )
}

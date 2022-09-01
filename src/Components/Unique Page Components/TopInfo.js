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
          </TopInfoStyled>
     )
}

import React from 'react'
import styled from 'styled-components'

const DropDownsStyled = styled.div`
     > select {
          width: 358px;
          height: 60px;
          font-size: 18px;
          line-height: 21px;
          padding: 0 0 0 1rem;
          border: ${props => (!localStorage.getItem(props.keyName) && props.hasSubmitted) ? '1.9px solid #E52F2F' : 'none'};
          border-radius: 8px;
          outline: none;
          font-weight: bold;
          position: relative;
          &:focus {
               border: ${props => (!localStorage.getItem(props.keyName) && props.hasSubmitted) ? '1.9px solid #E52F2F' : 'none'};
               outline: none;
          }

          background-image: url('./images/DropDown.png');
          background-size: 15px;
          background-repeat: no-repeat;
          background-position: 326px center;


          -moz-appearance: none;
          -webkit-appearance: none;
          appearance: none;
          @media(min-width: 1200px) {
               width: ${props => props.width};
               background-position: 900px center;
               height: 80px;
          }
     }
`

const OptionStyled = styled.option`
     border-radius: 8px;
     box-shadow: 10px 10px #EBEBEB;
`

export default function DropDowns(props) {
     const [options, setOptions] = React.useState([]);
     const [position, setPosition] = React.useState();

     // Get The List of Options
     React.useEffect(() => {
          fetch(`https://pcfy.redberryinternship.ge/api/${props.api}`)
          .then(response => response.json())
          .then(data => setOptions(data.data));

     }, []);

     React.useEffect(() => {
          if(!localStorage.getItem(props.keyName) && props.hasSubmitted) {
               props.setDropDownsError(oldValue => oldValue == 2 ? oldValue : oldValue + 1);
          } else {
               props.setDropDownsError(oldValue => oldValue == -2 ? oldValue : oldValue - 1);
          }
     });
     const listOptions = options.map(option => {
          if(props.keyName == 'team') {
               return (
                    <OptionStyled
                         key = {option.id}
                         id = {option.id}
                         value = {option.name}
                    >
                         {option.name}
                    </OptionStyled>
               )
          } else {
               //If the user has chosen the team,
               //then display positions based on the team.
               if(option.team_id == props.teamsId) {
                    return (
                         <OptionStyled
                              key = {option.id}
                              id = {option.id}
                              value = {option.name}
                         >
                              {option.name}
                         </OptionStyled>
                    )
               }
          }
     });

     function handleChange(event) {
          localStorage.setItem(props.keyName, event.target.value);
          if(props.keyName == 'team') {
               //Get the id of selected value
               const index = event.target.selectedIndex;
               localStorage.setItem("teamId", index);
               props.setTeamsId(index);
          } else {
               setPosition(localStorage.getItem(props.keyName));
               const element = event.target.childNodes[event.target.selectedIndex];
               localStorage.setItem('positionId', element.getAttribute('id'));
          }
     }
     return (
          <DropDownsStyled
               width = {props.width}
               hasSubmitted = {props.hasSubmitted}
               keyName = {props.keyName}
          >
               <select
                    onChange = {(event) => handleChange(event)}
                    value = {localStorage.getItem(props.keyName)}
               >
                    <OptionStyled
                         style={{color: 'black'}}
                         value = "" disabled selected hidden
                    >
                         {props.name}
                    </OptionStyled>

                    {listOptions}

               </select>
          </DropDownsStyled>
     )
}

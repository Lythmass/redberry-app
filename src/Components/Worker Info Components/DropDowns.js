import React from 'react'
import styled from 'styled-components'

const DropDownsStyled = styled.div`
     > select {
          width: 358px;
          height: 60px;
          font-size: 18px;
          line-height: 21px;
          padding: 0 0 0 1rem;
          border: none;
          outline: none;
          font-weight: bold;
          position: relative;
          &:focus {
               border: none;
               outline: none;
          }

          background-image: url('./images/DropDown.png');
          background-size: 15px;
          background-repeat: no-repeat;
          background-position: 326px center;


          -moz-appearance: none;
          -webkit-appearance: none;
          appearance: none;
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

     const listOptions = options.map(option => {
          if(props.name == 'თიმი') {
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

               //If the user has not chosen the team yet,
               //then display all positions.
               if(!props.teamsId) {
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
          if(props.name == 'თიმი') {
               //Get the id of selected value
               const index = event.target.selectedIndex;
               localStorage.setItem("teamId", index);
               props.setTeamsId(index);
          } else {
               setPosition(localStorage.getItem(props.keyName));
          }
     }

     return (
          <DropDownsStyled>
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

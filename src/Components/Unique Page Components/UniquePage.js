import React from 'react'
import styled from 'styled-components'

export default function UniquePage(props) {

     React.useEffect(() => {
          fetch(`https://pcfy.redberryinternship.ge/api/laptop/${props.id}?token=431408f3964369382be82953e06778f0`)
          .then(response => response.json())
          .then(data => console.log(data));
     }, []);

     return (
          <section>
               hha
          </section>
     )
}

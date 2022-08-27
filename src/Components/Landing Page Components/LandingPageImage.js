import React from 'react'
import styled from 'styled-components'

const LandingPageImageStyled = styled.img`
     width: 16.75rem;
     height: 22rem;
     @media (min-width: 1000px) {
          width: 49rem;
          height: 30rem;
     }
`

export default function LandingPageImage() {
     const [image, setImage] = React.useState(window.innerWidth >= 1000 ? "Group2.png" : "Group.png");

     React.useEffect(() => {
          //Change the picture while the screen gets resized
          function handleResize() {
               setImage(() => {
                    return window.innerWidth >= 1000 ? "Group2.png" : "Group.png";
               });

          }
          window.addEventListener('resize', handleResize)
     }, []);


     return (
          <LandingPageImageStyled src = {`./images/${image}`}/>
     )
}

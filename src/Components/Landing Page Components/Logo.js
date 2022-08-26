import React from 'react'
import styled from 'styled-components'

const LogoStyled = styled.img`
     width: 7rem;
     height: 1.125rem;

`

export default function Logo() {
     return (
          <LogoStyled src = './images/logo.png'/>
     )
}

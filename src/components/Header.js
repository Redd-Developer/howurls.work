import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ReactComponent as Logo } from '../images/logo-small.svg'
import { Grid } from './Grid'

const Alignment = styled.div`
  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const LogoLink = styled(Link)`
  display: inline-flex;
  border-radius: 2px;

  :focus {
    outline: 0;
    box-shadow: 0 0 0 3px hsla(9, 83%, 58%, 0.3);
  }
`

export const Header = () => {
  return (
    <header>
      <Grid>
        <Alignment>
          <LogoLink to="/" title="How URLs work?">
            <Logo />
          </LogoLink>
        </Alignment>
      </Grid>
    </header>
  )
}

import React from 'react'
import styled from 'styled-components'
import { ReactComponent as GitHubLogo } from './images/github-logo.svg'
import { Grid } from './Grid'

const Container = styled.footer`
  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: var(--color-black);

    :hover {
      color: var(--color-primary);
    }
  }
`

const GitHubLink = styled.a`
  margin-right: -10px;
  padding: 10px;
  display: flex;
`

export const Footer = () => {
  return (
    <Grid>
      <Container>
        <span>
          Made with love by{' '}
          <a
            href="https://twitter.com/kettanaito"
            title="kettanaito's twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            kettanaito
          </a>
        </span>
        <GitHubLink
          href="https://github.com/Redd-Developer/howurls.work"
          title="GitHub repository"
          target="_blank"
          rel="noopener noreferrer"
          flex
        >
          <GitHubLogo width={24} />
        </GitHubLink>
      </Container>
    </Grid>
  )
}

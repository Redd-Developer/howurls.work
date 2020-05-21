import React from 'react'
import styled from 'styled-components'
import { Box } from 'atomic-layout'
import { FormattedMessage } from 'react-intl'
import { ReactComponent as GitHubLogo } from '../images/github-logo.svg'
import { ReactComponent as VercelLogo } from '../images/vercel-logo.svg'
import { Grid } from './Grid'
import { LanguageSwitch } from './LanguageSwitch'

const StyledFooter = styled.footer`
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
  display: inline-block;
  height: 24px;
  box-sizing: content-box;
`

export const Footer = () => {
  return (
    <Grid>
      <Box
        as={StyledFooter}
        flex
        alignItems="center"
        justifyContent="space-between"
        paddingTop="2rem"
        paddingBottom="1rem"
      >
        <div>
          <FormattedMessage
            id="footer.copyright"
            values={{
              author: (
                <a
                  href="https://twitter.com/kettanaito"
                  title="kettanaito's twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  kettanaito
                </a>
              ),
            }}
          />

          <Box as="p" flex alignItems="center">
            <span>Powered by</span>
            <Box
              as="a"
              href="https://vercel.com/?utm_source=artemz"
              marginBottom={-2}
              marginLeft="0.5ch"
            >
              <VercelLogo width={64} fill="currentColor" />
            </Box>
          </Box>
        </div>
        <Box flex alignItems="center">
          <Box marginRight={10}>
            <LanguageSwitch />
          </Box>
          <GitHubLink
            href="https://github.com/Redd-Developer/howurls.work"
            title="GitHub repository"
            target="_blank"
            rel="noopener noreferrer"
            flex
          >
            <GitHubLogo width={24} />
          </GitHubLink>
        </Box>
      </Box>
    </Grid>
  )
}

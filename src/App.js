import React from 'react'
import { useLocation } from 'react-router'
import styled from 'styled-components'
import { Grid } from './components/Grid'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { UrlPreview } from './components/UrlPreview'

const PlaceholderText = styled.p`
  position: absolute;
  text-align: center;
  top: 125%;
  left: 0;
  right: 0;

  @media (min-width: 768px) {
    top: -50%;
  }
`

const MainContainer = styled.div`
  transition: margin 0.5s ease;

  @media (min-width: 768px) and (min-height: 1000px) {
    margin-top: 50%;
    transform: translateY(50%);
  }
`

function App() {
  const location = useLocation()
  const isRoot = location.pathname === '/'

  return (
    <>
      <Header />
      <main>
        <Grid className="relative">
          <MainContainer>
            {isRoot && (
              <PlaceholderText>
                Click on a part of the URL to learn more
              </PlaceholderText>
            )}
            <UrlPreview />
          </MainContainer>
        </Grid>
      </main>
      <Footer />
    </>
  )
}

export default App

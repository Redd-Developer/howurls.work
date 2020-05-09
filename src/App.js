import React from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Chunk } from './Chunk'
import { Heading } from './Heading'
import { Grid } from './Grid'
import { Header } from './Header'
import { Footer } from './Footer'

const UrlBox = styled.div`
  display: inline-block;
  padding: 1rem 1.25rem;
  max-width: 100%;
  width: 100%;
  white-space: nowrap;
  overflow-x: auto;

  border: 1px solid hsla(220, 15%, 40%, 0.16);
  border-radius: 0.5rem;
  color: hsl(220, 15%, 40%);
  font-family: var(--font-family-mono);
  font-size: 1rem;

  @media (min-width: 768px) {
    font-size: 1.5rem;
    overflow-x: initial;
  }

  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.006),
    0 6.7px 5.3px rgba(0, 0, 0, 0.008), 0 12.5px 10px rgba(0, 0, 0, 0.01),
    0 22.3px 17.9px rgba(0, 0, 0, 0.012), 0 41.8px 33.4px rgba(0, 0, 0, 0.014),
    0 100px 80px rgba(0, 0, 0, 0.02);

  a {
    display: inline-block;
    text-decoration: none;
    color: inherit;

    :focus {
      outline: 0;
      border-bottom: 1px dotted var(--color-primary);
      color: var(--color-primary);
      margin-bottom: -1px;
    }

    :hover {
      color: var(--color-black);
    }

    :hover:not(.active) {
      border-bottom: 1px dotted var(--color-primary);
      margin-bottom: -1px;
    }

    &.active {
      color: var(--color-primary);
      font-weight: 600;
    }
  }
`

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
            <UrlBox>
              <Chunk
                url="protocol"
                color="#c64b5d"
                explanation={() => (
                  <div>
                    <Heading>Protocol</Heading>
                    <p>
                      Protocol describes what data can be sent between a browser
                      and a server.
                    </p>
                    <p>
                      The most common protocols on the web are{' '}
                      <strong>HTTPS</strong> and <strong>HTTP</strong>, which
                      are designed for handling hypertext documents (HTML).
                      However, there are many other protocols, like FTP (File
                      Transfer Protocol) for transferring files, or POP (Post
                      Office Protocol) for sending and receiving emails.
                    </p>
                  </div>
                )}
              >
                https://
              </Chunk>
              <Chunk
                url="domain"
                orientation="top"
                color="#307ab8"
                explanation={() => (
                  <div>
                    <Heading>Domain name</Heading>
                    <p>Domain is a human-readable address of the server.</p>
                    <p>
                      In reality, all servers have IP addresses (i.e.{' '}
                      <code>111.22.333.44</code>), but since those are hard to
                      remember and subjected to change, we often use domain
                      names like aliases instead.
                    </p>
                    <p>
                      When requested, a domain name is sent to the DNS (Domain
                      Name Servers) that resolves it to the actual IP address of
                      the server.
                    </p>
                  </div>
                )}
              >
                site.com
              </Chunk>
              <Chunk
                url="port"
                color="red"
                explanation={() => (
                  <div>
                    <Heading>Port</Heading>
                    <p>
                      Port number is used by a server to expose a certain
                      service. Since one server may be dealing with multiple
                      things, like hosting a webpage or handling file transfer,
                      each of those services will be available publically on
                      different ports.
                    </p>
                    <p>
                      Although you can rarely see a port number on the web, it's
                      always required, and by default is inferred from the{' '}
                      <Link to="protocol">protocol</Link>:
                      <ul>
                        <li>
                          <code>:80</code> is used by HTTP
                        </li>
                        <li>
                          <code>:433</code> is used by HTTPS
                        </li>
                      </ul>
                    </p>
                  </div>
                )}
              >
                :433
              </Chunk>
              <Chunk
                url="path"
                orientation="top"
                align="right"
                color="#3caea3"
                explanation={() => (
                  <div>
                    <Heading>Path</Heading>
                    <p>
                      Path is a string that points to a resource on a server.
                    </p>
                    <p>
                      Server decides how to handle a request on a given path.
                      For example, it may return an HTML page, or communicate
                      with another servers and respond with a plain data.
                    </p>
                  </div>
                )}
              >
                /user
              </Chunk>
              <Chunk
                url="query"
                color="#9f8a2d"
                align="right"
                explanation={() => (
                  <div>
                    <Heading>Query parameter</Heading>
                    <p>Query parameters are arguments to the path.</p>
                    <p>
                      They are stored in a <code>key=value</code> pairs that are
                      appended to the path with a <code>?</code> (question
                      mark). Each next parameter is joined with an{' '}
                      <code>&</code> (ampersand):
                      <ul>
                        <li>
                          <code>?userId=123&type=reader</code>
                        </li>
                      </ul>
                      Server can access and parse a query string to get
                      additional information about the request.
                    </p>
                  </div>
                )}
              >
                ?id=123
              </Chunk>
              <Chunk
                url="fragment"
                orientation="top"
                align="right"
                color="#ed553b"
                explanation={() => (
                  <div>
                    <Heading>Fragment</Heading>
                    <p>
                      Fragment is a reference to a section of the page.
                      Sometimes it's called an <em>anchor</em>, or <em>hash</em>
                      .
                    </p>
                    <p>
                      In modern development a fragment can also be used to
                      represent a page's state. One of such examples is a
                      client-side routing, which you can observe on this
                      website.
                    </p>
                  </div>
                )}
              >
                #settings
              </Chunk>
            </UrlBox>
          </MainContainer>
        </Grid>
      </main>
      <Footer />
    </>
  )
}

export default App

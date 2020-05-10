import React from 'react'
import { FormattedMessage } from 'react-intl'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Heading } from './Heading'
import { Chunk } from './Chunk'

const createStandardComponent = (Name) => {
  return (...chunks) => <Name>{chunks}</Name>
}

const formattedMessageValues = {
  p: createStandardComponent('p'),
  em: createStandardComponent('em'),
  ul: createStandardComponent('ul'),
  li: createStandardComponent('li'),
  strong: createStandardComponent('strong'),
  code: createStandardComponent('code'),
  ProtocolLink: (...chunks) => {
    return <Link to="/protocol">{chunks}</Link>
  },
}

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

export const UrlPreview = () => {
  return (
    <UrlBox>
      <Chunk
        url="protocol"
        color="#c64b5d"
        explanation={() => (
          <div>
            <Heading>
              <FormattedMessage id="url.http.protocol.name" />
            </Heading>
            <p>
              <FormattedMessage
                id="url.http.protocol.definition"
                values={formattedMessageValues}
              />
            </p>
            <FormattedMessage
              id="url.http.protocol.description"
              values={formattedMessageValues}
            />
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
            <Heading>
              <FormattedMessage id="url.http.domain.name" />
            </Heading>
            <p>
              <FormattedMessage
                id="url.http.domain.definition"
                values={formattedMessageValues}
              />
            </p>
            <FormattedMessage
              id="url.http.domain.description"
              values={formattedMessageValues}
            />
          </div>
        )}
      >
        site.com
      </Chunk>
      <Chunk
        url="port"
        color="#7f4ae4"
        explanation={() => (
          <div>
            <Heading>
              <FormattedMessage id="url.http.port.name" />
            </Heading>
            <p>
              <FormattedMessage id="url.http.port.definition" />
            </p>
            <FormattedMessage
              id="url.http.port.description"
              values={formattedMessageValues}
            />
          </div>
        )}
      >
        :443
      </Chunk>
      <Chunk
        url="path"
        orientation="top"
        align="right"
        color="#3caea3"
        explanation={() => (
          <div>
            <Heading>
              <FormattedMessage id="url.http.path.name" />
            </Heading>
            <p>
              <FormattedMessage
                id="url.http.path.definition"
                values={formattedMessageValues}
              />
            </p>
            <FormattedMessage
              id="url.http.path.description"
              values={formattedMessageValues}
            />
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
            <Heading>
              <FormattedMessage id="url.http.query.name" />
            </Heading>
            <p>
              <FormattedMessage
                id="url.http.query.definition"
                values={formattedMessageValues}
              />
            </p>
            <FormattedMessage
              id="url.http.query.description"
              values={formattedMessageValues}
            />
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
            <Heading>
              <FormattedMessage id="url.http.fragment.name" />
            </Heading>
            <p>
              <FormattedMessage
                id="url.http.fragment.definition"
                values={formattedMessageValues}
              />
            </p>
            <FormattedMessage
              id="url.http.fragment.description"
              values={formattedMessageValues}
            />
          </div>
        )}
      >
        #settings
      </Chunk>
    </UrlBox>
  )
}

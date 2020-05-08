import React, { useMemo } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import styled, { css } from 'styled-components'

const Container = styled.span`
  --color-primary: ${({ color }) => color};

  @media (min-width: 768px) {
    position: relative;
  }
`

const Popover = styled.div`
  --offset: 8rem;

  position: absolute;
  font-family: Roboto, sans-serif;
  font-size: 1rem;
  animation: slideUp 0.5s ease;
  width: 90%;
  white-space: normal;

  ${({ orientation }) => {
    switch (orientation) {
      case 'top':
        return css`
          bottom: var(--offset);
        `
      default:
        return css`
          top: var(--offset);
        `
    }
  }}

  @media (min-width: 768px) {
    --offset: 5rem;
    width: 400px;

    ${({ align }) => {
      switch (align) {
        case 'right':
          return css`
            right: 0;
          `
        default:
          return css`
            left: 0;
          `
      }
    }}
  }

  @keyframes slideUp {
    0% {
      opacity: 0;
      transform: translateY(-24px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  a {
    color: var(--color-primary) !important;
  }
`

export const Chunk = ({
  children,
  color,
  align,
  orientation,
  explanation,
  url,
}) => {
  const location = useLocation()
  const isActive = useMemo(() => {
    return location.pathname.includes(url)
  }, [location.pathname])

  return (
    <Container color={color}>
      <NavLink to={url}>{children}</NavLink>
      {isActive && explanation && (
        <Popover orientation={orientation} align={align}>
          {explanation()}
        </Popover>
      )}
    </Container>
  )
}

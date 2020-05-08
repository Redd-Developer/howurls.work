import styled from 'styled-components'

export const Heading = styled.h3`
  display: flex;
  margin: 0 0 0.5em;
  color: var(--color-black);
  font-size: 1.25rem;
  font-weight: 600;

  &:before {
    content: 'i';
    font-family: var(--font-family-mono);
    font-size: 12px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-primary);
    border-radius: 50%;
    color: #fff;
    height: 20px;
    width: 20px;
    margin: 5px 1ch 0 0;
    vertical-align: text-top;
  }
`

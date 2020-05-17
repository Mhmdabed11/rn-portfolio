import styled from "styled-components"

import BackgroundImage from "gatsby-background-image"

export const Container = styled.div`
  background-color: ${props => props.theme.bluePrimary};
  min-height: 100vh;
  padding-bottom: 5rem;
`

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 100px;
  min-height: 500px;
  grid-gap: 10px;
`
export const ImageDisplay = styled(BackgroundImage)`
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;

  grid-column: span 2;
  grid-row: span 2;

  &:nth-child(8n + 1),
  &:nth-child(8n + 2),
  &:nth-child(8n + 6),
  &:nth-child(8n + 7) {
    grid-column: span 1;
    grid-row: span 3;
  }

  &:nth-child(8n + 3),
  &:nth-child(8n + 5) {
    grid-column: span 2;
    grid-row: span 5;
  }
`

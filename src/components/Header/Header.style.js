import styled from "styled-components"
import { Link } from "gatsby"

export const Container = styled.header`
  background: ${props => props.theme.bluePrimary};
`
export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 1.45rem 1.0875rem;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Title = styled.h1`
  margin: 0;
`
export const TitleLink = styled(Link)`
  color: white;
  text-decoration: none;
`
export const Logo = styled.img`
  max-width: 200px;
  display: inline-block;
  margin: 0;
`

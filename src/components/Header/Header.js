import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container, Title, TitleLink, Wrapper, Logo } from "./Header.style"
import LogoSVG from "../../images/logo.svg"

const Header = ({ siteTitle }) => (
  <Container>
    <Wrapper>
      <Title>
        <TitleLink to="/" style={{}}>
          <Logo src={LogoSVG} alt="Rahaf_Nassif" />
        </TitleLink>
      </Title>
    </Wrapper>
  </Container>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

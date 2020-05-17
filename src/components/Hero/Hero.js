import React from "react"
import {
  Container,
  ImageDisplay,
  Wrapper,
  Info,
  InfoTitle,
  InfoTitleArt,
  Description,
} from "./Hero.style"

export default function Hero({ images }) {
  return (
    <Container>
      <Wrapper>
        {images.map(image => {
          return <ImageDisplay fluid={image.childImageSharp.fluid} />
        })}
      </Wrapper>
    </Container>
  )
}

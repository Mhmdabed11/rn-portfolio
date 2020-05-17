import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Hero from "../components/Hero/Hero"

const IndexPage = ({ data }) => {
  const images = data.allFile.nodes
    .map(node => ({
      ...node,
      name: parseInt(node.name),
    }))
    .filter(image => !Number.isNaN(image.name))
  return (
    <Layout>
      <SEO title="Home" />
      <Hero images={images} />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query HomePageQuery {
    allFile {
      nodes {
        name
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  }
`

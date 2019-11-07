import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const NTElectricLogoImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "nt_electric_logo.png" }) {
        childImageSharp {
          fluid(maxHeight: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} objectPosition="static"/>
}

export default NTElectricLogoImage

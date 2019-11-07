import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const EULogo = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "partners/eu.png" }) {
        childImageSharp {
          fixed(width: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return <Img fixed={data.placeholderImage.childImageSharp.fixed}/>
}

export default EULogo

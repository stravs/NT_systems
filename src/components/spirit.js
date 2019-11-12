import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const Spirit = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "partners/spirit.png" }) {
        childImageSharp {
          fixed(width: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return <Img fixed={data.placeholderImage.childImageSharp.fixed}/>
}

export default Spirit

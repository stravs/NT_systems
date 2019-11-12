import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const RSLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "partners/rs_razvoj.png" }) {
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

export default RSLogo

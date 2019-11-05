import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const LogoImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 450, height: 450) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return <Img fixed={data.placeholderImage.childImageSharp.fixed} className='logo'/>
}

export default LogoImage

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const NTElectricLogoImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "nt_electric_logo.png" }) {
        childImageSharp {
          fixed(height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return <Img fixed={data.placeholderImage.childImageSharp.fixed} className='logo'/>
}

export default NTElectricLogoImage

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const MotorImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "motor_img.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1900, maxHeight: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} className="section-img"/>
}

export default MotorImage

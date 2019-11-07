
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const MotorCurve2Img = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "motor_curve2.png" }) {
        childImageSharp {
          fluid(maxWidth: 200, maxHeight: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default MotorCurve2Img

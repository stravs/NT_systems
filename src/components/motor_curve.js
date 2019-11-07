
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const MotorCurveImg = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "motor_curve.png" }) {
        childImageSharp {
          fluid(maxWidth: 200, maxHeight: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid}/>
}

export default MotorCurveImg

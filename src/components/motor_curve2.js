import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const MotorCurve2Img = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "motor_curve.png" }) {
        childImageSharp {
          fixed(width: 400) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return <Img fixed={data.placeholderImage.childImageSharp.fixed}/>
}

export default MotorCurve2Img

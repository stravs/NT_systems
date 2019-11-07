import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const MotorRender2 = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "motor.png" }) {
        childImageSharp {
          fixed(width: 350) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return <Img fixed={data.placeholderImage.childImageSharp.fixed}/>
}

export default MotorRender2

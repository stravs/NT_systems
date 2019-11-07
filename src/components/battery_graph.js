import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const BatteryGraph = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "battery_graph.png" }) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} objectPosition="static"/>
}

export default BatteryGraph
 

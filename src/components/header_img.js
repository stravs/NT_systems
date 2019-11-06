import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import LogoImage from '../components/logo_img'


import BackgroundImage from 'gatsby-background-image'


const HeaderImage = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "header.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <div class="sticky-top z">
          <BackgroundImage
            Tag="section"
            className={className}
            fluid={imageData}
            backgroundColor={`#040e18`}
          >
            <div className="d-flex justify-content-center logo">
              <LogoImage />
            </div>

          </BackgroundImage>
        </div>
      )
    }}
  />
)



const StyledHeaderImage = styled(HeaderImage)`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 500px;
  background-position: center right;
  background-repeat: repeat-y;
  background-size: cover;
`

export default StyledHeaderImage

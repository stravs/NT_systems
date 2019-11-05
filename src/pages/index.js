import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import About from "../components/about"
import Icons from "../components/icons"
import Motor from "../components/motor"
import MotorImage from "../components/motor_img"
import Battery from "../components/battery"
import BatteryImage from "../components/battery_img"
import Box from "../components/box"
import BoxImage from "../components/box_img"
import Control from "../components/control"


const IndexPage = () => (
  <Layout>
    <About />
    <Icons />
    <Motor />
    <MotorImage />
    <Battery />
    <BatteryImage />
    <Box />
    <BoxImage />
    <Control />
  </Layout>
)

export default IndexPage

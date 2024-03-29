import React from "react"

import Layout from "../components/layout"
import About from "../components/about"
import Icons from "../components/icons"
import Motor from "../components/motor2"
import MotorImage from "../components/motor_img"
import Battery from "../components/battery"
import BatteryImage from "../components/battery_img"
import Box from "../components/box"
import BoxImage from "../components/box_img"
import Future from "../components/future"
import ControlImage from "../components/control_img"
import Contact from "../components/contact"
import HeaderImage from "../components/header_img"
import Partners from "../components/partners"




const IndexPage = () => (
  <Layout>
    <HeaderImage />
    <About />
    <Icons />
    <Motor />
    <MotorImage />
    <Battery />
    <BatteryImage />
    <Box />
    <BoxImage />
    <Future />
    <ControlImage />
    <Contact />
    <Partners />
  </Layout>
)

export default IndexPage

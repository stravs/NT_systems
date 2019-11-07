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
import Control from "../components/control"
import ControlImage from "../components/control_img"
import Contact from "../components/contact"
import HeaderImage from "../components/header_img"
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';


const IndexPage = () => (
  <Layout>
<<<<<<< HEAD
    <ParallaxProvider>
      <Parallax className="" y={[100, -50 ]} tagOuter="figure">
        <HeaderImage />
      </Parallax>
      <About />
      <Icons />
      <Motor />
      <Parallax className="custom-class" y={[100, -60]} tagOuter="figure">
        <MotorImage />
      </Parallax>
      <Battery />
      <Parallax className="custom-class" y={[100, -60]} tagOuter="figure">
        <BatteryImage />
      </Parallax>
      <Box />
      <Parallax className="custom-class" y={[100, -60]} tagOuter="figure">
        <BoxImage />
      </Parallax>
      <Control />
      <Parallax className="custom-class" y={[100, -60]} tagOuter="figure">
        <ControlImage />
      </Parallax>
      <Contact />
    </ParallaxProvider>
=======
    <HeaderImage />
    <About />
    <Icons />
    <Motor />
    <MotorImage />
    <Battery />
    <BatteryImage />
    <Box />
    <BoxImage />
    <Control />
    <ControlImage />
    <Contact />
>>>>>>> parent of 120b0eb... size section photos on mobile
  </Layout>
)

export default IndexPage

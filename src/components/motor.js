import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import MotorRender from '../components/motor_render'
import SingleMotorTable from '../components/s_motor_table'
import DoubleMotorTable from '../components/d_motors_table'

const Motor = () => (
  <div className="about">
    <div className="container">
      <h2 className="text-center">Electric motor</h2>
      <p>We are using the permanent magnet synchronous motor with best in class power density which is up to 10 kW/kg peak power. This performance is by itself within the state-of-the-art range, but the engine has reduced weight and is plug-and-play ready: boat builders only mount the motor into the boat, connect the power supply, the communication cables and the sea water for cooling and the motor is ready.</p>
      <div className="row">
        <div className="col align-self-center">
          <p>The design of the engine allows stacking up engines and thus increasing the propulsion power, which also increases modes of applications and usefulness. The power options of individual electric motor are 20-150 kW of continuous power which brings the universality to the system.</p>
        </div>
        <div className="col">
          <MotorRender />
        </div>
      </div>
      <br/>
      <SingleMotorTable />
      <br/>
      <DoubleMotorTable />
    </div>

  </div>
)


export default Motor

import React from "react"
import MotorRender from '../components/motor_render'
import MotorRender2 from '../components/motor_render2'
import SingleMotorTable from '../components/s_motor_table'
import DoubleMotorTable from '../components/d_motors_table'
import IsoMotorImage from "../components/iso_motor"
import IsoMotorImage2 from "../components/motor_iso_2"
import MotorCurveImg from "../components/motor_curve"
import MotorCurve2Img from "../components/motor_curve2"

const Motor = () => (
  <div className="about">
    <div className="container">
      <h2 className="text-center">Electric motor</h2>
      <div className="row text-center">
        <div className="col-md-6">
          <MotorRender2 />
        </div>
        <div className="col-md-6">
          <MotorRender />
        </div>
      </div>
      <p>We are using the <strong>permanent magnet synchronous</strong> motor with best in class power density which is up to <strong>10 kW/kg peak power</strong>. This performance is by itself within the state-of-the-art range, but the engine has reduced weight and is plug&play ready: you only mount the motor into the boat, connect the power supply, the communication cables and the sea water for cooling and the motor is ready.</p>
      <p><strong>Plug & play design includes</strong> (prewired and premounted): gearbox, thrust bearing, motor controler, cooling pump for inner circle (glycol), cooling pump for outer circle (seawater), heat radiator/exchanger between inner and outer circle, filter for seawater, expansion tank for innercircle, electronics with CANbus communications - connection box , 12V battery, all the water plugs, all the electrical plugs, motor mounts.</p>
      <p>The design of the engine allows <strong>stacking up engines</strong> and thus increasing the propulsion power, which also increases modes of applications and usefulness. The power options of individual electric motor are <strong>27-350 kW of continuous power</strong> which brings the universality to the system. Stacking the motor to quadriple set can easily give you 1400 kW (1880 HP) or more if it is necessary.</p>
      <br/>
      <SingleMotorTable />
      <br/>
      <DoubleMotorTable />
      <br/>
      <h4 className="text-center">Dimensions</h4>
      <div className="row text-center">
        <div className="col-md-6">
          <IsoMotorImage />
        </div>
        <div className="col-md-6">
          <IsoMotorImage2 />
        </div>
      </div>
      <br/><br/>
      <div className="row text-center">
        <div className="col-md-6">
            <h4>NTS-56 power curve</h4>
            <MotorCurveImg />
            <br/>
        </div>
        <div className="col-md-6">
          <h4>NTS-56 torque curve</h4>
          <MotorCurve2Img />
          <br/>
        </div>
      </div>
    </div>

  </div>
)


export default Motor

import React from "react"
import BatteryTable from "../components/battery_table"
import BatteryGraph from "../components/battery_graph"


const Battery = () => (
  <div className="about">
    <div className="container">
      <h2 className="text-center">Battery bank</h2>
      <p>We made huge <strong>step forward</strong> in battery development. We are using innovative <strong>Lithium Titanate (LTO)</strong> cells and build in-house LTO-based batteries. They are the <strong>safest</strong>, can operate in the wide temperature range from -40°C to + 65°C and are <strong>very stable</strong> without thermal runaway effect. They have the <strong>10x greater life cycle</strong> and cheaper price per life-cycle, comparing to other lithium chemistries. They can also be charged or discharged in <strong>10 minutes</strong>, which is better than the state-of-the-art. LTO batteries are friendlier to the environment since the anode does not contain any carbon and there is also less overall waste.</p>
      <p>The basic unit of battery pack has 40Ah capacity at 331 Vdc, resulting in 13.2 kWh of energy. If you need higher power output or longer range, you can simply add additional battery, thus increasing energy capacity and maximum power output. You can build <strong>custom-made battery</strong> which best serves your needs. </p>
      <p>For Basic or Power installations there are also LYP and LiPo battery packs available which have unique qualities.
      Battery bank includes <strong>optional range extender</strong>, an internal diesel combustion engine as generator, allowing to extend the range of propulsion system, or combined electric-diesel use.</p>
      <div className="row">
        <div className="col-md-6">
          <BatteryTable />
        </div>
        <div className="col-md-6 align-self-center text-center">
          <h4>Discharge characteristics (ambient temp: 25°C)</h4>
          <BatteryGraph />
        </div>
      </div>
    </div>


  </div>
)


export default Battery

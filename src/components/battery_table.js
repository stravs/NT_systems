import React from "react"

const BatteryTable = () => (
  <div class="table-responsive">
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Basic</th>
          <th scope="col">Power</th>
          <th scope="col">Pro</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Chemistry</th>
          <td>LYP (Lithium Yttrium Iron Phosphate)</td>
          <td>LiPo (Lithium polymer)</td>
          <td>LTO (Lithium titanate)</td>
        </tr>
        <tr>
          <th scope="row">Energy capacity – kWh</th>
          <td>13.44</td>
          <td>13.32</td>
          <td>13.25</td>
        </tr>
        <tr>
          <th scope="row">Capacity – Ah</th>
          <td>40</td>
          <td>40</td>
          <td>40</td>
        </tr>
        <tr>
          <th scope="row">Power output – kW</th>
          <td>40,3</td>
          <td>106,5</td>
          <td>79,5</td>
        </tr>
        <tr>
          <th scope="row">Peak power – kW</th>
          <td>134,4</td>
          <td>200</td>
          <td>132,5</td>
        </tr>
        <tr>
          <th scope="row">Nominal voltage – Vdc</th>
          <td>336</td>
          <td>333</td>
          <td>331</td>
        </tr>
        <tr>
          <th scope="row">Architecture</th>
          <td>105S 1P</td>
          <td>90S 1P</td>
          <td>144S 1P</td>
        </tr>
        <tr>
          <th scope="row">Cycle life</th>
          <td>5000</td>
          <td>5000</td>
          <td>25000</td>
        </tr>
        <tr>
          <th scope="row">Cooling</th>
          <td>Air</td>
          <td>Air</td>
          <td>Air</td>
        </tr>
        <tr>
          <th scope="row">Weight – kg</th>
          <td>183</td>
          <td>99</td>
          <td>194</td>
        </tr>
        <tr>
          <th scope="row">Cell manufacturer</th>
          <td>Winston</td>
          <td>Kokam</td>
          <td>Yinlong</td>
        </tr>
        <tr>
          <th scope="row">Battery management</th>
          <td>REC Master + 7x slave</td>
          <td>REC Master + 6x slave</td>
          <td>REC master + 9x slave</td>
        </tr>
      </tbody>
    </table>
  </div>
)


export default BatteryTable

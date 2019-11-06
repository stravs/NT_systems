import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const DoubleMotorTable = () => (
  <div className="container">
    <div class="table-responsive">
      <table class="table table-striped">
        <caption>*Optional 57 cm (22.4 in)</caption>
        <thead>
          <tr>
            <th scope="col">D series</th>
            <th scope="col">NTD-72</th>
            <th scope="col">NTD-80</th>
            <th scope="col">NTD-112</th>
            <th scope="col">NTD-160</th>
            <th scope="col">NTD-470</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Output power - hp</th>
            <td>72</td>
            <td>80</td>
            <td>112</td>
            <td>160</td>
            <td>470</td>
          </tr>
          <tr>
            <th scope="row">Output power - kW</th>
            <td>54</td>
            <td>60</td>
            <td>84</td>
            <td>120</td>
            <td>350</td>
          </tr>
          <tr>
            <th scope="row">Engine speed - rpm</th>
            <td>4950</td>
            <td>3650</td>
            <td>3650</td>
            <td>2300</td>
            <td>3700</td>
          </tr>
          <tr>
            <th scope="row">Mounts width – cm (in)</th>
            <td>42 (16.5)*</td>
            <td>42 (16.5)*</td>
            <td>42 (16.5)*</td>
            <td>42 (16.5)*</td>
            <td>57 (22.4)</td>
          </tr>
          <tr>
            <th scope="row">Inner cooling</th>
            <td>Water/Glycol</td>
            <td>Water/Glycol</td>
            <td>Water/Glycol</td>
            <td>Water/Glycol</td>
            <td>Water/Glycol</td>
          </tr>
          <tr>
            <th scope="row">Outer cooling</th>
            <td>Sea water</td>
            <td>Sea water</td>
            <td>Sea water</td>
            <td>Sea water</td>
            <td>Sea water</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
)


export default DoubleMotorTable

import React from "react"

const SingleMotorTable = () => (
  <div className="container">
    <div class="table-responsive">
      <table className="table table-striped">
        <caption>*Optional 57 cm (22.4 in)</caption>
        <thead>
          <tr>
            <th scope="col">S series</th>
            <th scope="col">NTS-36</th>
            <th scope="col">NTS-40</th>
            <th scope="col">NTS-56</th>
            <th scope="col">NTS-80</th>
            <th scope="col">NTS-235</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Output power - hp</th>
            <td>36</td>
            <td>40</td>
            <td>56</td>
            <td>80</td>
            <td>235</td>
          </tr>
          <tr>
            <th scope="row">Output power - kW</th>
            <td>27</td>
            <td>30</td>
            <td>42</td>
            <td>60</td>
            <td>175</td>
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


export default SingleMotorTable

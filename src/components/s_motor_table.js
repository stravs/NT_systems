import React from "react"

const SingleMotorTable = () => (
  <div class="table-responsive">
    <table className="table table-striped">
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
      </tbody>
    </table>
  </div>
)


export default SingleMotorTable

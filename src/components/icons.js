import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlug, faThLarge, faDownload, faBatteryFull, faChargingStation, faArrowRight, faShip, faLeaf } from '@fortawesome/free-solid-svg-icons'




const Icons = () => (
  <div className="icons">
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-6 text-center white">
          <FontAwesomeIcon icon={faPlug} size="3x" />
          <p/>
          <h4>Plug&play</h4>
          <h6>Easy installation. Easy configuration.</h6>
        </div>
        <div className="col-md-3 col-sm-6 text-center white">
          <FontAwesomeIcon icon={faThLarge} size="3x" />
          <p/>
          <h4>Modular/scalable</h4>
          <h6>Custom made configuration for individual user, depending on customers needs.</h6>
        </div>
        <div className="col-md-3 col-sm-6 text-center white">
          <FontAwesomeIcon icon={faDownload} size="3x" />
          <p/>
          <h4>Easy upgrading</h4>
          <h6>Just istall new component and the system will automatically recognise it.</h6>
        </div>
        <div className="col-md-3 col-sm-6 text-center white">
          <FontAwesomeIcon icon={faBatteryFull} size="3x" />
          <p/>
          <h4>LTO lithium technology</h4>
          <h6>Safe stable battery, greater battery cycle life: 25.000+, higher power output.</h6>
        </div>
      </div>
      <p></p>
      <div className="row">
        <div className="col-md-3 col-sm-6 text-center white">
          <FontAwesomeIcon icon={faChargingStation} size="3x" />
          <p/>
          <h4>Quick charge</h4>
          <h6>Battery can be charged in just 10 minutes.</h6>
        </div>
        <div className="col-md-3 col-sm-6 text-center white">
          <FontAwesomeIcon icon={faArrowRight} size="3x" />
          <p/>
          <h4>Range extender</h4>
          <h6>Plug&play range extender can be installed to extend the range of the battery.</h6>
        </div>
        <div className="col-md-3 col-sm-6 text-center white">
          <FontAwesomeIcon icon={faShip} size="3x" />
          <p/>
          <h4>Power range</h4>
          <h6>Wide power range is suitable for lots of applicaitons. Motors available from 27 kW to 350 kW and much more when installing twin, triple, quadriple,...</h6>
        </div>
        <div className="col-md-3 col-sm-6 text-center white">
          <FontAwesomeIcon icon={faLeaf} size="3x" />
          <p/>
          <h4>Consumption optimization</h4>
          <h6>If neccessary, the system can automatically optimize consumption regarding battery SOC, GPS log data, selected user mode.</h6>
        </div>
      </div>
    </div>
  </div>



)


export default Icons

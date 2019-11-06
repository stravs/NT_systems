import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import NTElectricLogoImage from "../components/logo_nt_electric"
import GreenlineLogo from "../components/greenline"
import VZSLogo from "../components/vzs"
import MetronLogo from "../components/metron"
import KreatifLogo from "../components/kreatif"
import RECLogo from "../components/rec"
import EULogo from "../components/eu"

const Contact = () => (
  <div className="about">
    <div className="container">
      <h2 className="text-center">Contact</h2>
      <br/>
      <div className="row">
        <div className="col align-self-center">
          <NTElectricLogoImage />
        </div>
        <div className="col">
          <h5>NT Electric d.o.o.</h5>
          <h5>Ješetova ulica 17, 4000 Kranj</h5>
          <h5>Slovenia, EU</h5>
          <h5>info@nt-electric.com</h5>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <h2 className="text-center">Partners</h2>
    </div>
    <div className="container-fluid text-center">
      <div className="row">
        <div className="col-md-2">
            <a href="https://www.greenlinehybrid.si/">
              <GreenlineLogo />
            </a>

        </div>
        <div className="col-md-2">
            <a href="https://www.veslaska-zveza.si/">
              <VZSLogo />
            </a>
        </div>
        <div className="col-md-2">
            <a href="https://eauto.si/">
              <MetronLogo />
            </a>
        </div>
        <div className="col-md-2 align-self-center">
            <a href="https://www.kreatif-design.com/en/">
              <KreatifLogo />
            </a>
        </div>
        <div className="col-md-2 align-self-center">
            <a href="http://www.rec-bms.com/">
              <RECLogo />
            </a>
        </div>
        <div className="col-md-2 align-self-center">
            <a href="https://europa.eu/">
              <EULogo />
            </a>
        </div>
      </div>
    </div>
  </div>
)


export default Contact

import React from "react"
import NTElectricLogoImage from "../components/logo_nt_electric"
import GreenlineLogo from "../components/greenline"
import VZSLogo from "../components/vzs"
import MetronLogo from "../components/metron"
import KreatifLogo from "../components/kreatif"
import RECLogo from "../components/rec"
import EULogo from "../components/eu"

const Contact = () => (
  <div className="about" id="contact">
    <div className="container">
      <h2 className="text-center">Contact</h2>
      <br/>
      <div className="row">
        <div className="col-md-6 align-self-center mr-0">
          <NTElectricLogoImage className="ntElogo"/>
        </div>
        <div className="col-md-6">
          <p><strong>NT Electric d.o.o.</strong><br/>
          <strong>Ješetova ulica 17, 4000 Kranj</strong><br/>
          <strong>Slovenia, EU</strong><br/>
          <strong>info@nt-electric.com</strong></p>
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

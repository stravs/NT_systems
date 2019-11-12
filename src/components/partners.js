import React from "react"
import NTElectricLogoImage from "../components/logo_nt_electric"
import GreenlineLogo from "../components/greenline"
import VZSLogo from "../components/vzs"
import MetronLogo from "../components/metron"
import KreatifLogo from "../components/kreatif"
import RECLogo from "../components/rec"
import EULogo from "../components/eu"
import RSLogo from "../components/rs"
import Spirit from "../components/spirit"

const Partners = () => (
  <div className="about" >
    <div className="container-fluid text-center">
      <h2 className="text-center">Partners</h2>
      <div className="row">
        <div className="col-md-2 offset-md-1">
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
      </div>
      <div className="row">
        <div className="col-md-2 offset-md-2 align-self-center">
            <a href="https://www.spiritslovenia.si/">
              <Spirit />
            </a>
        </div>
        <div className="col-md-2 offset-md-1 align-self-center">
            <a href="https://www.gov.si/drzavni-organi/ministrstva/ministrstvo-za-gospodarski-razvoj-in-tehnologijo/">
              <RSLogo />
            </a>
        </div>
        <div className="col-md-2 offset-md-1 align-self-center">
            <a href="https://www.eu-skladi.si/">
              <EULogo />
            </a>
        </div>
      </div>
    </div>
  </div>
)


export default Partners

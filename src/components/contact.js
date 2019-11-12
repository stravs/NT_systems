import React from "react"
import NTElectricLogoImage from "../components/logo_nt_electric"

const Contact = () => (
  <div className="about" id="contact">
    <div className="container">
      <h2 className="text-center">Contact</h2>
      <div className="row">
        <div className="col-md-6 align-self-center">
          <div className="mx-auto">
            <div className="logoNTE">
              <NTElectricLogoImage />
            </div>

          </div>
        </div>
        <div className="col-md-6 align-self-center text-center">
          <div className="mx-auto">
            <p><strong>NT Electric d.o.o.</strong><br/>
            <strong>Ješetova ulica 17, 4000 Kranj</strong><br/>
            <strong>Slovenia, EU</strong><br/>
            <strong>info@nt.systems</strong><br/>
            <strong>+386 40 326 593</strong><br/>
            <strong>VAT ID: SI15375501</strong></p>
          </div>

        </div>
      </div>
    </div>
  </div>
)


export default Contact

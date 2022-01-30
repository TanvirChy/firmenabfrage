import React, { useState } from "react";
import Card from "../card/Card";
import FirmenDetail from "../firmenDetail/FirmenDetail";
import FirmenTable from "../firmenTable/FirmenTable";
import FirmenTop from "../firmenTop/FirmenTop";
import "./zafix.css";

const Zefix = () => {
  const [ergebnisse, setErgebnisse] = useState(false);
  const [weiter, setWeiter] = useState(false);
  const [companyDetail ,setCompanyDetail] = useState(null)
  return (
    <div>
      <header className="zefix-header">
        <div className="zefix-header-title">Firmenabfrage</div>
      </header>

      {!weiter && (
        <Card title={"Firmenabfrage"}>
          <FirmenTop ergebnisse={ergebnisse} setErgebnisse={setErgebnisse} />
        </Card>
      )}

      {!weiter && ergebnisse && (
        <Card title={"Firmen Detail"}>
          <FirmenDetail ergebnisse={ergebnisse} companyDetail={companyDetail} setCompanyDetail={setCompanyDetail}/>
        </Card>
      )}
      {!weiter && ergebnisse && (
        <div className="zefix-btn-container">
          <button className="zefix-btn" onClick={() => setWeiter(true)}>
            weiter
          </button>
        </div>
      )}

      {weiter && ergebnisse && (
        <Card title={"Firmendetails ubernehmen"}>
          <FirmenTable companyDetail={companyDetail} />
        </Card>
      )}

      {weiter && (
        <>
          <div className="zefix-btn-container">
            <button
              className="zefix-cencel-btn"
              onClick={() => setWeiter(false)}
            >
              Cancel
            </button>
            <button className="zefix-confirm-btn">Confirm</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Zefix;

// Test: https://www.zefixintg.admin.ch/ZefixPublicREST/
// Production: https://www.zefix.admin.ch/ZefixPublicREST/

// Username: rg@multi-concept.ch
// Password: 4z7P6NZK

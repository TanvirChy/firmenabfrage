import React, { useState } from "react";
import Card from "../card/Card";
import FirmenDetail from "../firmenDetail/FirmenDetail";
import FirmenTable from "../firmenTable/FirmenTable";
import FirmenTop from "../firmenTop/FirmenTop";
import "./zafix.css";

const Zefix = () => {
  const [ergebnisse, setErgebnisse] = useState(false);
  const [weiter, setWeiter] = useState(false);
  return (
    <div>
      <header className="zefix-header">
        <div className="zefix-header-title">Firmenabfrage</div>
      </header>
      <div className="zefix-title">Firmenabfrage</div>

      {!weiter && (
        <Card title={"Firmenabfrage"}>
          <FirmenTop ergebnisse={ergebnisse} setErgebnisse={setErgebnisse} />
        </Card>
      )}

      {!weiter && ergebnisse && (
        <Card title={"Firmen Detail"}>
          <FirmenDetail />
        </Card>
      )}
      {!weiter && ergebnisse && (
        <div className="zefix-btn-container">
          <button className="zefix-btn" onClick={() => setWeiter(true)}>
            weiter
          </button>
        </div>
      )}

      {weiter && (
        <Card title={"Firmendetails ubernehmen"}>
          <FirmenTable />
        </Card>
      )}

      {weiter && (
        <>
          <div className="zefix-btn-container">
            <button className="zefix-btn">Cencel</button>
            <button className="zefix-btn">Confirm</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Zefix;

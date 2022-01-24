import React from "react";
import './firmenTop.css'

const FirmenTop = () => {
  return (
    <div className="firmen_top_content">
      <div className="input_section">
        <label htmlFor="" className="input_label">
          Suchtext
        </label>
        <p>Swisscom</p>
      </div>
      <div className="input_section">
        <div className="input_select">
          <label htmlFor="" className="input_label">
            Ergebnisse
          </label>

          <select className="input_select_feild">
            <option value="">hello</option>
            <option value="">Ergebnisse</option>
            <option value="">hello</option>
            <option value="">Ergebnisse</option>
            <option value="">hello</option>
            <option value="">Suchtext</option>
            <option value="">hello</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FirmenTop;

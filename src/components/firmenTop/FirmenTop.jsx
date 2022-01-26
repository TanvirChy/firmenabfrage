import React, { useState } from "react";
import Select from "react-select";

import "./firmenTop.css";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "dhaka", label: "dhaka" },
  { value: "chittagong", label: "chittagong" },
  { value: "sylet", label: "sylet" },
  { value: "rajshahi", label: "rajshahi" },
  { value: "rangpur", label: "rangpur" },
  { value: "bogura", label: "bogura" },
  
];

const FirmenTop = ({ ergebnisse, setErgebnisse }) => {
  const [companyName,setCompanyName] = useState('Swisscom');
  return (
    <div className="firmen_top_content">
      <div className="input-section-first">
        <label  className="input-first-label">
          Suchtext
        </label>
        {/* <input type="text" onChange={(e)=>setCompanyName(e.target.value)} value={companyName} /> */}
        <div className="input-value">Swisscom</div>
      </div>
      <div className="input-section-second">
        <label className="input-second-label">Ergebnisse</label>

        <Select
          defaultValue={ergebnisse}
          onChange={setErgebnisse}
          className="input-value"
          options={options}
        />
      </div>
    </div>
  );
};

export default FirmenTop;

import React, { useState } from "react";
import Select from "react-select";

import "./firmenTop.css";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const FirmenTop = ({ ergebnisse, setErgebnisse }) => {

  return (
    <div className="firmen_top_content">
      <div className="input_section">
        <label htmlFor="" className="input_label">
          Suchtext
        </label>
        <div className="input-value">Swisscom</div>
      </div>
      <div className="input_section">
        <div className="input_select">
          <label className="input_label">
            Ergebnisse
          </label>

          <Select
            defaultValue={ergebnisse}
            onChange={setErgebnisse}
            
            options={options}
          />
        </div>
      </div>
    </div>
  );
};

export default FirmenTop;

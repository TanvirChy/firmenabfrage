import React, { useState } from 'react';
import Select from 'react-select';

import "./firmenTop.css";

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];


const FirmenTop = ({ ergebnisse, setErgebnisse }) => {
  const handleChangeErgebnisse = (e) => {
    setErgebnisse(e.target.value);
  };

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

          <select
            className="input_select_feild"
            value={ergebnisse}
            onChange={handleChangeErgebnisse}
          >
            <option value="hello">hello</option>
            <option value="Ergebnisse">Ergebnisse</option>
            <option value="hello">hello</option>
            <option value="Ergebnisse">Ergebnisse</option>
            <option value="hello">hello</option>
            <option value="Suchtext">Suchtext</option>
            <option value="hello">hello</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FirmenTop;

import React, { useEffect, useState } from "react";
import Select from "react-select";
import axios from "axios";
import "./firmenTop.css";

const options = [];

const FirmenTop = ({ ergebnisse, setErgebnisse }) => {
  const [companyName, setCompanyName] = useState("Swisscom");

  const [companyNames, setCompanyNames] = useState([]);
  let data = companyName;

  useEffect(() => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        // // 'Access-Control-Allow-Origin': true,
        // 'Access-Control-Allow-Origin': '*',
        // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
      auth: {
        username: "rg@multi-concept.ch",
        password: "4z7P6NZK",
      },
    };
    const sendCompanyName = async () => {
      const response = await axios.post("http://localhost:5000", data, config);
      setCompanyNames(response.data);
      console.log("response", response.data);
    };
    sendCompanyName();
  }, [data]);

  const makeOption = () => {
    companyNames.map((company) => {
      options.push({ label: `${company.name}`, ...company });
    });
  };
  makeOption();
  console.log(options);

  return (
    <div className="firmen_top_content">
      <div className="input-section-first">
        <label className="input-first-label">Suchtext</label>
        <input
          type="text"
          onChange={(e) => setCompanyName(e.target.value)}
          value={companyName}
        />
      </div>
      <div className="input-section-second">
        <label className="input-second-label">Ergebnisse</label>

        {companyNames && (
          <Select
            defaultValue={ergebnisse}
            onChange={setErgebnisse}
            className="input-value"
            options={options}
          />
        )}
        {console.log(ergebnisse)}
      </div>
    </div>
  );
};

export default FirmenTop;

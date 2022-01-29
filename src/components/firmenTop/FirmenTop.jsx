import React, { useEffect, useState } from "react";
import Select from "react-select";
// import axios from "axios";
import "./firmenTop.css";

const options = [];

const FirmenTop = ({ ergebnisse, setErgebnisse }) => {
  const [companyName, setCompanyName] = useState("Swisscom");
  const [companyNames, setCompanyNames] = useState([]);
  // let data = { company: companyName };

  // useEffect(() => {
  //   const config = {
  //     headers: {
  //       "Content-Type": "application/json",
  //       // // 'Access-Control-Allow-Origin': true,
  //       // 'Access-Control-Allow-Origin': '*',
  //       // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  //     },
  //     auth: {
  //       username: "rg@multi-concept.ch",
  //       password: "4z7P6NZK",
  //     },
  //   };
  //   const sendCompanyName = async () => {
  //     const response = await axios.post("http://localhost:5000", data, config);

  //     setCompanyNames(response.data);
  //     console.log("response", response.data);
  //   };
  //   sendCompanyName();
  // }, []);

  useEffect(() => {
    var formdata = new FormData();
    formdata.append("company", "swisscom");

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
      
    };

    fetch("http://localhost:5000", requestOptions)
      .then((response) => response.json())
      // .then((result)=> console.log(result))
      .then((result) => setCompanyNames(result))
      .catch((error) => console.log("error", error));
  }, []);

  const makeOption = () => {
    // eslint-disable-next-line array-callback-return
    companyNames.map((company) => {
      options.push({ label: `${company.name}`, ...company });
    });
  };
  makeOption();

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

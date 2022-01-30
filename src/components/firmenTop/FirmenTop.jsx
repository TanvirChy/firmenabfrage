import React, { useEffect, useState } from "react";
import Select from "react-select";
import "./firmenTop.css";

const options = [];

const FirmenTop = ({ ergebnisse, setErgebnisse }) => {
  const [companyName, setCompanyName] = useState("");
  const [companyNames, setCompanyNames] = useState([]);
  const [focused, setFocused] = React.useState(false);
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);


  const onChangeHandler = (e) => {
    setCompanyName(e.target.value);
  };

  useEffect(() => {
    console.log('effected');
    var formdata = new FormData();
    formdata.append("company", companyName);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch("http://localhost:5000", requestOptions)
      .then((response) => response.json())
      .then((result) => setCompanyNames(result))

      .catch((error) => console.log("error", error));
  }, [focused]);

  const makeOption = () => {
    // eslint-disable-next-line array-callback-return

    companyNames.length > 0 &&
      companyNames.map((company) => {
        options.push({ label: `${company.name}`, value:`${company.name}` , ...company });
      });
  };

  makeOption();
 

  return (
    <div className="firmen_top_content">
      <div className="input-section-first">
        <label className="input-first-label">Suchtext</label>
        <input
          type="text"
          className="first-input-value"
          onChange={onChangeHandler}
          value={companyName}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </div>

      <div className="input-section-second">
        <label className="input-second-label">Ergebnisse</label>

        {companyNames.length > 0 ? (
          <Select
            onChange={setErgebnisse}
            className="input-value"
            options={options}
          />
        ) : (
          <Select isLoading />
        )}

       
      </div>
    </div>
  );
};

export default FirmenTop;

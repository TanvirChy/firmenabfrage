import axios from "axios";
import React, { useEffect, useState } from "react";
import "./firmenDetail.css";

const FirmenDetail = ({ individual, setIndividual }) => {
  useEffect(() => {
    const getCompanyData = async () => {
      const response = await axios.get("http://localhost:7000");
      setIndividual(response.data);
      console.log("individual", response.data);
    };
    getCompanyData();
  }, []);

  return (
    <div className="firmen_detail_content">
      <div className="firmen_detail_row">
        {individual ? (
          <>
            <div className="firmen-label">
              <div className="firmen-detail-feilds">Firma</div>
              <div className="firmen-detail-feilds">UID</div>
              <div className="firmen-detail-feilds">Address</div>
              <div className="firmen-detail-feilds">Zafix Detail</div>
            </div>

            <div className="firmen-value">
              <div className="firmen-detail-feilds">{individual.name}</div>
              <div className="firmen-detail-feilds">{individual.uid}</div>
              <div className="firmen-detail-feilds">{`${individual.address.street}, ${individual.address.houseNumber} 
               ${individual.address.swissZipCode} ,${individual.address.city}`}</div>
              <a
                target="_blank"
                href={`${individual.cantonalExcerptWeb}`}
                className="firmen-detail-feilds"
              >
                FirmenLink
              </a>
            </div>
          </>
        ) : (
          <div>Loading</div>
        )}
      </div>
    </div>
  );
};

export default FirmenDetail;

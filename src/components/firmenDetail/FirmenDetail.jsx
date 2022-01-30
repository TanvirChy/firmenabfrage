// import axios from "axios";
import React, { useEffect} from "react";
import "./firmenDetail.css";

const FirmenDetail = ({ ergebnisse ,companyDetail,setCompanyDetail }) => {
  console.log('indivudual form ' ,ergebnisse);
  
  const ehraid = ergebnisse.ehraid
  console.log(ehraid);
  
  // useEffect(() => {
  //   const getCompanyData = async () => {
  //     const response = await axios.get("http://localhost:7000");
  //     setIndividual(response.data);
  //     console.log("individual", response.data);
  //   };
  //   getCompanyData();
  // }, [setIndividual]);

  useEffect(() => {
    var formdata = new FormData();
    formdata.append("ehraid", ehraid);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch("http://localhost:7000", requestOptions)
      .then((response) => response.json())
      // .then((result)=> console.log(result))
      .then((result) => setCompanyDetail(result))
      .catch((error) => console.log("error", error));
  }, [ehraid,setCompanyDetail]);



  return (
    <div className="firmen_detail_content">
      <div className="firmen_detail_row">
        {companyDetail ? (
          <>
            <div className="firmen-label">
              <div className="firmen-detail-feilds">Firma</div>
              <div className="firmen-detail-feilds">UID</div>
              <div className="firmen-detail-feilds">Address</div>
              <div className="firmen-detail-feilds">Zafix Detail</div>
            </div>

            <div className="firmen-value">
              <div className="firmen-detail-feilds">{companyDetail.name.slice(0, 35)+'...'}</div>
              <div className="firmen-detail-feilds">{companyDetail.uid}</div>
              <div className="firmen-detail-feilds">{`${companyDetail.address.street.slice(0, 15)+'...'}, ${companyDetail.address.houseNumber} 
               ${companyDetail.address.swissZipCode} ,${companyDetail.address.city.slice(0, 10)+'...'}`}</div>
              <a
                target="_blank"
                href={`${companyDetail.cantonalExcerptWeb}`}
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

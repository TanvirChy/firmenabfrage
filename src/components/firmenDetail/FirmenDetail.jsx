import React from "react";
import "./firmenDetail.css";

const FirmenDetail = () => {
  return (
    <div className="firmen_detail_content">
      <div className="firmen_detail_row">
       <div className="firmen-label">
          <p>name</p>
          <p>email</p>
          <p>homeTown</p>
        </div>
        <div className="firmen-value">
          <p>tanvir</p>
          <p>tanvir@bitcode.pro</p>
          <p>Chittagong</p>
        </div> 
      </div>
    </div>
  );
};

export default FirmenDetail;

{
  /* <div className="firmen-label">
          <p>name</p>
          <p>email</p>
          <p>homeTown</p>
        </div>
        <div className="firmen-value">
          <p>tanvir</p>
          <p>tanvir@bitcode.profkjdhgkjfshgkjafhgkjasdhfjksadhfak</p>
          <p>Chittagong</p>
        </div> */
}

import React from "react";
import "./firmenDetail.css";

const FirmenDetail = () => {
  return (
    <div className="firmen_detail_content">
      <div className="firmen_detail_row">
       <div className="firmen-label">
          <div className="firmen-detail-feilds">name</div>
          <div className="firmen-detail-feilds">email</div>
          <div className="firmen-detail-feilds">homeTown</div>
        </div>
        <div className="firmen-value">
          <div className="firmen-detail-feilds">tanvir</div>
          <div className="firmen-detail-feilds">tanvir@bitcode.pro</div>
          <div className="firmen-detail-feilds">Chittagong</div>
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

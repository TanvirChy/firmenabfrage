import React from "react";
import Card from "../card/Card";
import FirmenDetail from "../firmenDetail/FirmenDetail";
import FirmenTop from "../firmenTop/FirmenTop";
import "./commonModal.css";

const CommonModal = ({ closeModal }) => {
  return (
    <>
      <div className="overlay"></div>
      <div className="modal">
        <header className="modal__header">
          <p className="modal_header_title">Firmenabfrage</p>
          <button onClick={closeModal} className="close_button">
            &times;
          </button>
        </header>
        <div className="modal_title">Firmenabfrage</div>

        <Card title={"Firmenabfrage"}>
          <FirmenTop />
        </Card>
        <Card title={'Firmen Detail'}>
          <FirmenDetail />
        </Card>
        <div className="modal-btn-container">

        <button className="modal-btn" >weiter</button>
        </div>
      </div>
    </>
  );
};

export default CommonModal;

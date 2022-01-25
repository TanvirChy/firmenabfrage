import React, { useState } from "react";
import Card from "../card/Card";
import FirmenDetail from "../firmenDetail/FirmenDetail";
import FirmenTable from "../firmenTable/FirmenTable";
import FirmenTop from "../firmenTop/FirmenTop";
import "./commonModal.css";

const CommonModal = ({ closeModal }) => {
  const [ergebnisse, setErgebnisse] = useState(false);
  const [weiter, setWeiter] = useState(false);
  const [forward,setForward] = useState(false);
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

        {!weiter && (
          <Card title={"Firmenabfrage"}>
            <FirmenTop ergebnisse={ergebnisse} setErgebnisse={setErgebnisse} />
          </Card>
        )}

        {!weiter && ergebnisse && (
          <Card title={"Firmen Detail"}>
            <FirmenDetail />
          </Card>
        )}
        {!weiter && ergebnisse && (
          <div className="modal-btn-container">
            <button className="modal-btn" onClick={() => setWeiter(true)}>
              weiter
            </button>
          </div>
        )}

        {weiter && (
          <Card title={"Firmendetails ubernehmen"}>
            <FirmenTable />
          </Card>
        )}

        {weiter && (
          <>
            <div className="modal-btn-container">
              <button className="modal-btn" onClick={closeModal}>
                Cencel
              </button>
              <button className="modal-btn" onClick={closeModal}>
                Confirm
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CommonModal;

import React, { useState } from "react";
import Card from "../card/Card";
import "./commonModal.css";

const CommonModal = ({ closeModal }) => {
  return (
    <>
      <div className='overlay'></div>
      <div className='modal'>
        <header className='modal__header'>
          <p className="modal_header_title">Firmenabfrage</p>
          <button onClick={closeModal} className='close_button'>
            &times;
          </button>
        </header>
        <div className="modal_title">Firmenabfrage</div>
        
        <Card/>
      </div>
    </>
  );
};

export default CommonModal;

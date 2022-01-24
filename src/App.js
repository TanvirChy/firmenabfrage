import React, { useState } from "react";
import "./App.css";
import CommonModal from "./components/commonModal/CommonModal";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className='App'>
      {isOpen && <CommonModal closeModal={closeModal} />}

      <h2>This is modal</h2>
      <button className='button' onClick={openModal}>
        Open Modal
      </button>
    </div>
  );
}

export default App;

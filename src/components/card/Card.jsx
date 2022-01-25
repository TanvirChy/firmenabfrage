import React from "react";
import "./card.css";

const Card = ({ title, children }) => {
  return (
    <div className="card_container">
      <div className="card_title">{title}</div>
      {children}
    </div>
  );
};

export default Card;

import React from 'react';
import './card.css';

const Card = () => {
  return <div className='card_container'>
      <div className='card_title'>Gefandene Firmen</div>
      <div className='card_content'>
          <div className='input_section'>
              <label htmlFor="" className='input_label'>Suchtext</label>
              <p>Swisscom</p>
          </div>
          <div className='input_section'>
              <div className='input_select'>
              <label htmlFor="" className='input_label'>Ergebnisse</label>

              <select className='input_select_feild'>
                  <option value="">hello</option>
                  <option value="">Ergebnisse</option>
                  <option value="">hello</option>
                  <option value="">Ergebnisse</option>
                  <option value="">hello</option>
                  <option value="">Suchtext</option>
                  <option value="">hello</option>
              </select>
              </div>
          </div>
      </div>
  </div>;
};

export default Card;


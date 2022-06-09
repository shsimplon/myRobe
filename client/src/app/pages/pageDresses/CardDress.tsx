import React from 'react';
const CardDress = ({ dress }) => {
  return (
    <div className="dress-card">
      <img src="../img.jpeg" alt={'photo de ' + dress.name} />
      <div className="infos">
        <div className="title">
          <p>
            {dress.name}&nbsp; {dress.price}
          </p>
          <p>{dress.description}</p>
        </div>
        <div className="btn-container"></div>
      </div>
    </div>
  );
};

export default CardDress;

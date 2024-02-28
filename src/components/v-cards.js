import React from "react";
import PropTypes from "prop-types";
import "./v-cards.css";

const VCards = ({ indx }) => {
  const cardData = require("../data/vcard_data.json");
  const card = cardData[indx];

  if (!card) {
    return null;
  }

  const gradientStyle = {
    backgroundImage: card.color,
  };

  return (
    <div className={`v-cards-container ${card.rootClassName}`}>
      <div className="v-cards-feature-card" style={gradientStyle}>
        <img
          alt={card.imageAlt}
          src={card.imageSrc}
          className="v-cards-image"
        />
        <div className="v-cards-container1">
          <h2 className="v-cards-text">{card.heading}</h2>
          <span className="v-cards-text1">
            <span className="">{card.text}</span>
            <br className=""></br>
            <br className=""></br>
          </span>
        </div>
      </div>
    </div>
  );
};

VCards.propTypes = {
  indx: PropTypes.number.isRequired,
};

export default VCards;

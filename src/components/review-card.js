import React from "react";
import { DateTimePrimitive } from "@teleporthq/react-components";
import PropTypes from "prop-types";
import "./review-card.css";

const ReviewCard = ({ indx }) => {
  const reviewData = require("../data/reviews.json");
  const review = reviewData.data[indx];

  if (!review) {
    return null;
  }

  return (
    <div className={`review-card-container ${review.rootClassName} `}>
      <span className="review-card-date-time">
        <DateTimePrimitive
          format="DD/MM/YYYY"
          date={review.date}
          className=""
        />
      </span>
      <span className="review-card-text">{review.name}</span>
      <span className="review-card-text1">{review.text}</span>
      <div className="review-card-container1">
        {[...Array(review.stars)].map((_, index) => (
          <img
            key={index}
            alt={`star-${index}`}
            loading="lazy"
            src="https://www.onlygfx.com/wp-content/uploads/2022/02/golden-star-clipart.png"
            className={`review-card-image`}
          />
        ))}
      </div>
    </div>
  );
};

ReviewCard.propTypes = {
  indx: PropTypes.number.isRequired,
};

export default ReviewCard;

import React, { useState } from "react";
import "./ReviewFormDialog.css";

const ReviewFormDialog = ({ open, onClose, onSubmit }) => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [stars, setStars] = useState(5);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleStarChange = (event) => {
    setStars(parseInt(event.target.value, 10));
  };

  const handleSubmit = () => {
    onSubmit({ name, message, stars });
    onClose();
  };

  return (
    <div
      style={{
        display: open ? "block" : "none",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "5px",
          maxWidth: "400px",
          width: "100%",
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>Write a Review</h2>
        <div className="rating">
          {[5, 4, 3, 2, 1].map((value) => (
            <React.Fragment key={value}>
              <input
                type="radio"
                id={`star${value}`}
                value={value}
                name="rate"
                checked={stars === value}
                onChange={handleStarChange}
              />
              <label title={value} htmlFor={`star${value}`}></label>
            </React.Fragment>
          ))}
        </div>
        <label
          htmlFor="name"
          style={{ display: "block", marginBottom: "10px" }}
        >
          Name:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          style={{
            width: "100%",
            padding: "8px",
            marginBottom: "10px",
            border: "1px solid #ccc",
            borderRadius: "3px",
          }}
        />
        <label
          htmlFor="message"
          style={{ display: "block", marginBottom: "10px" }}
        >
          Message:
        </label>
        <textarea
          id="message"
          value={message}
          onChange={handleMessageChange}
          style={{
            width: "100%",
            padding: "8px",
            marginBottom: "10px",
            border: "1px solid #ccc",
            borderRadius: "3px",
            minHeight: "100px",
          }}
        />
        <div style={{ textAlign: "right" }}>
          <button
            onClick={handleSubmit}
            style={{
              padding: "8px 16px",
              marginRight: "10px",
              border: "none",
              borderRadius: "3px",
              backgroundColor: "#007bff",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
          <button
            onClick={onClose}
            style={{
              padding: "8px 16px",
              border: "none",
              borderRadius: "3px",
              backgroundColor: "#ccc",
              color: "#333",
              cursor: "pointer",
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewFormDialog;

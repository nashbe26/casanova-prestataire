import React from "react";
import ReactDOM from "react-dom";
import "./style.css"; // Import your CSS file here

const showToast = (message, position) => {
  const toastContainer = document.createElement("div");
  toastContainer.className = `toast-container ${position}`;
  document.body.appendChild(toastContainer);

  ReactDOM.render(<PresProduitLighttoast message={message} />, toastContainer);

  setTimeout(() => {
    document.body.removeChild(toastContainer);
  }, 5000); // Hide toast after 5 seconds
};

const PresProduitLighttoast = ({ message }) => {
  return (
    <div className="toast">
      <div className="toast-title">{"message.title"}</div>
      <div className="toast-text">{message.text}</div>
    </div>
  );
};

export default showToast;

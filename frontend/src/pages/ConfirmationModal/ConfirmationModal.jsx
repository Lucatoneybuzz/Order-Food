// ConfirmationModal.js

import React from "react";
import "./ConfirmationModal.css";

const ConfirmationModal = ({ isOpen, onCancel, onConfirm }) => {
  return (
    <div className={`confirmation-modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <h3>Are you sure you want to proceed?</h3>
        <p>This action cannot be undone.</p>
        <div className="modal-buttons">
          <button className="cancel" onClick={onCancel}>
            Cancel
          </button>
          <button className="confirm" onClick={onConfirm}>
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;

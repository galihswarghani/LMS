import MDButton from "components/MDButton";
import React from "react";
import "./styleModal.css";

// eslint-disable-next-line react/prop-types
function AddModal({ isShowAddModal, onPressBack }) {
  return (
    <div className="modal-container" style={{ display: isShowAddModal ? "block" : "none" }}>
      <div className="modal-box">
        <h3>Add Batch</h3>
        <div className="input">
          <input type="text" />
        </div>
        <div className="btn-group" />
        <MDButton variant="contained">Browse</MDButton>
        <MDButton variant="contained" color="info">
          Upload
        </MDButton>
        <MDButton variant="contained" color="info" onClick={onPressBack}>
          Back
        </MDButton>
      </div>
    </div>
  );
}

export default AddModal;

import MDButton from "components/MDButton";
import React from "react";
import "./styleModal.css";

function AddModal() {
  return (
    <div className="modal-container">
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
      </div>
    </div>
  );
}

export default AddModal;

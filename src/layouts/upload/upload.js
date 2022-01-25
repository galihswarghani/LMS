/* eslint-disable react/prop-types */
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDButton from "components/MDButton";
import "./styleUpload.css";

function Upload({ onPressBack }) {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <div className="up-div">
        <div className="upload-container">
          <div className="upload-box">
            <h3>Add Batch</h3>
            <div className="input">
              <input type="text" />
            </div>
            <div className="btn-group" />
            <div className="btn-brows">
              <MDButton variant="contained">Browse</MDButton>
            </div>
          </div>
          <div className="btn-action">
            <div className="btn-upload">
              <MDButton variant="contained" color="info">
                Upload
              </MDButton>
            </div>
            <MDButton variant="contained" color="info" onClick={onPressBack}>
              Back
            </MDButton>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Upload;

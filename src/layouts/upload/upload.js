/* eslint-disable react/prop-types */
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import MDButton from "components/MDButton";
// import "./styleUpload.css";
import FileUpload from "./fileUpload";
// import NyobaUpload from "./nyobaUpload";

function Upload() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <div className="up-div">
        <div className="upload-container">
          <div className="upload-box">
            <h3>Add Batch</h3>
            <FileUpload />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Upload;

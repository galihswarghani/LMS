/* eslint-disable react/button-has-type */
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Bill from "layouts/billing/components/Bill";
import Upload from "layouts/upload/upload";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function BatchUpload() {
  const [backPage, setBackPage] = useState();
  const navigate = useNavigate();
  return (
    <Card id="delete-account">
      <MDBox pt={3} px={2}>
        <MDTypography variant="h6" fontWeight="medium">
          Batch Upload
        </MDTypography>
        <div className="upload-batch">
          <div>
            <a
              href=" /upload "
              onClick={(e) => {
                e.preventDefault();
                navigate("/upload");
              }}
            >
              <button>Add Batch</button>
            </a>
          </div>
        </div>
      </MDBox>
      <MDBox pt={1} pb={2} px={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <Bill
            Batch="Batch 1"
            UploadData="5 Januari 2022"
            UploadBy="Galih"
            // vat="FRB1235476"
          />
          <Bill
            Batch="Batch 2"
            UploadData="5 Januari 2022"
            UploadBy="Galih"
            // vat="FRB1235476"
          />
          <Bill
            Batch="Batch 3"
            UploadData="5 Januari 2022"
            UploadBy="Galih"
            // vat="FRB1235476"
            noGutter
          />
          <Bill
            Batch="Batch 4"
            UploadData="5 Januari 2022"
            UploadBy="Galih"
            // vat="FRB1235476"
            noGutter
          />
          <Bill
            Batch="Batch 5"
            UploadData="5 Januari 2022"
            UploadBy="Galih"
            // vat="FRB1235476"
            noGutter
          />
        </MDBox>
      </MDBox>
      <Upload
        back={backPage}
        onPressBack={() => {
          setBackPage(false);
        }}
      />
    </Card>
  );
}

export default BatchUpload;

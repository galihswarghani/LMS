import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Billing page components
import Bill from "layouts/billing/components/Bill";
import { useState } from "react";
import AddModal from "./addModals";
// import AddModal from "../addModals";

function BatchUpload() {
  const [isShowAddModal, setIsShowAddModal] = useState();
  return (
    <Card id="delete-account">
      <MDBox pt={3} px={2}>
        <MDTypography variant="h6" fontWeight="medium">
          Batch Upload
        </MDTypography>
        <div className="btnAdd">
          <MDButton
            variant="outlined"
            color="info"
            float="right"
            onClick={() => {
              setIsShowAddModal(true);
            }}
          >
            Add Batch
          </MDButton>
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
      <AddModal
        isShowAddModal={isShowAddModal}
        onPressBack={() => {
          setIsShowAddModal(false);
        }}
      />
    </Card>
  );
}

export default BatchUpload;

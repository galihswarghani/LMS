import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import BillingInformation from "layouts/billing/components/BillingInformation";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import MDInput from "components/MDInput";

function Billing() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={20}>
            <MDBox pr={1}>
              <MDInput label="Search here" />
            </MDBox>
            <BillingInformation />
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Billing;

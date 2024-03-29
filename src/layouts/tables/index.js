/* eslint-disable react/button-has-type */
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
import { useNavigate } from "react-router-dom";

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";

function Tables() {
  const navigate = useNavigate();
  const { columns, rows } = authorsTableData();
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pr={1}>
        <MDInput label="Search here" />
      </MDBox>

      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
        <div className="btn-pemohon">
          <a
            href=" # "
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <button>Request Slik</button>
          </a>
          <a
            href=" # "
            onClick={(e) => {
              e.preventDefault();
              navigate("/submitSelected");
            }}
          >
            <button>Submit Selected</button>
          </a>
        </div>
      </MDBox>
    </DashboardLayout>
  );
}

export default Tables;

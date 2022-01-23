import MDBox from "components/MDBox";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DataTable from "examples/Tables/DataTable";

function SlikSummary() {
  return (
    <>
      <DashboardLayout>
        <DashboardNavbar />
        <MDBox mb={2} />
      </DashboardLayout>
      <div className="table">
        <div className="tbl">
          <DataTable
            table={{
              columns: [
                { Header: "name", accessor: "name", width: "100px" },
                { Header: "position", accessor: "position", width: "100px" },
                { Header: "office", accessor: "office" },
                { Header: "age", accessor: "age", width: "100px" },
              ],
              rows: [
                {
                  name: "Euphemia Chastelain",
                  position: "Engineer IV",
                  office: "Little Baguio",
                  age: 63,
                  startDate: "5/1/2021",
                  salary: "$339,489",
                },
                {
                  name: "Euphemia Chastelain",
                  position: "Engineer IV",
                  office: "Little Baguio",
                  age: 63,
                  startDate: "5/1/2021",
                  salary: "$339,489",
                },
                {
                  name: "Euphemia Chastelain",
                  position: "Engineer IV",
                  office: "Little Baguio",
                  age: 63,
                  startDate: "5/1/2021",
                  salary: "$339,489",
                },
              ],
            }}
          />
        </div>
      </div>
    </>
  );
}

export default SlikSummary;

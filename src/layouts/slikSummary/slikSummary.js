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
                { Header: "Institusi", accessor: "name", width: "100px" },
                { Header: "Plafond", accessor: "position", width: "100px" },
                { Header: "Baki Debet", accessor: "office" },
                { Header: "Jatoh Tempo", accessor: "age", width: "100px" },
                { Header: "Kolektabilitas", accessor: "kol", width: "100px" },
              ],
              rows: [
                {
                  name: "BCA",
                  position: "Rp. 50.000.000",
                  office: "Rp. 270.000",
                  age: "22 Sept 2025",
                  kol: "kol 1",
                },
                {
                  name: "BNI",
                  position: "Rp. 50.000.000",
                  office: "Rp. 270.000",
                  age: "22 Sept 2025",
                  kol: "kol 1",
                },
                {
                  name: "BRI",
                  position: "Rp. 50.000.000",
                  office: "Rp. 270.000",
                  age: "22 Sept 2025",
                  kol: "kol 1",
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

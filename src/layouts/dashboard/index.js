import Grid from "@mui/material/Grid";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import "./data/home.css";
// import Footer from "examples/Footer";

// import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
// import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
// import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
// import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
// import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
// import Projects from "layouts/dashboard/components/Projects";
// import OrdersOverview from "layouts/dashboard/components/OrdersOverview";

function Dashboard() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <div className="dashboard">
        <div className="permohonan">
          <p className="p1">Permohonan</p>
          <div className="permohonan1">
            <Grid>
              <DefaultInfoCard
                // icon="account_balance"
                title="Total Batch"
                description="5"
                // value="+$2000"
              />
            </Grid>
          </div>
          <div className="permohonan2">
            <Grid>
              <DefaultInfoCard
                // icon="account_balance"
                title="Customer"
                description="500"
                // value="+$2000"
              />
            </Grid>
          </div>
          <div className="permohonan3">
            <Grid>
              <DefaultInfoCard
                // icon="account_balance"
                title="Plafond"
                description="Rp. 50.000.000"
                // value="+$2000"
              />
            </Grid>
          </div>
          <div className="reject">
            <p className="p2">Reject</p>
            <div className="reject1">
              <Grid>
                <DefaultInfoCard
                  // icon="account_balance"
                  title="Customer"
                  description="200"
                  // value="+$2000"
                />
              </Grid>
            </div>
            <div className="reject2">
              <Grid>
                <DefaultInfoCard
                  // icon="account_balance"
                  title="Plafond"
                  description="Rp.10.000.000"
                  // value="+$2000"
                />
              </Grid>
            </div>
          </div>
          <div className="cair">
            <p className="p3">Cair</p>
            <div className="cair1">
              <Grid>
                <DefaultInfoCard
                  // icon="account_balance"
                  title="Customer"
                  description="400"
                  // value="+$2000"
                />
              </Grid>
            </div>
            <div className="cair2">
              <Grid>
                <DefaultInfoCard
                  // icon="account_balance"
                  title="Plafond"
                  description="Rp.40.000.000"
                  // value="+$2000"
                />
              </Grid>
            </div>
          </div>
          <div className="open">
            <p className="p4">Open</p>
            <div className="open1">
              <Grid>
                <DefaultInfoCard
                  // icon="account_balance"
                  title="Customer"
                  description="250"
                  // value="+$2000"
                />
              </Grid>
            </div>
            <div className="open2">
              <Grid>
                <DefaultInfoCard
                  // icon="account_balance"
                  title="Plafond"
                  description="Rp.30.000.000"
                  // value="+$2000"
                />
              </Grid>
            </div>
          </div>
          <div className="close">
            <p className="p5">Close</p>
            <div className="close1">
              <Grid>
                <DefaultInfoCard
                  // icon="account_balance"
                  title="Customer"
                  description="150"
                  // value="+$2000"
                />
              </Grid>
            </div>
            <div className="close2">
              <Grid>
                <DefaultInfoCard
                  // icon="account_balance"
                  title="Plafond"
                  description="Rp.10.000.000"
                  // value="+$2000"
                />
              </Grid>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
export default Dashboard;

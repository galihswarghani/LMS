// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
import Profile from "layouts/profile";
import Notifications from "layouts/notifications";
import SignIn from "layouts/authentication/sign-in";
import SubmitSelected from "layouts/submitSelected/submitSelected";
import InputPemohon from "layouts/inputPemohon/inputPemohon";
import SlikSummary from "layouts/slikSummary/slikSummary";

// @mui icons
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "Home",
    key: "home",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/home",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Batch Upload",
    key: "batch",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/batch",
    component: <Billing />,
  },
  {
    type: "collapse",
    name: "Pemohon",
    key: "pemohon",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/pemohon",
    component: <Tables />,
  },
  {
    type: "collapse",
    name: "Slik Summary",
    key: "slikSummery",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/slikSummary",
    component: <SlikSummary />,
  },
  {
    type: "collapse",
    name: "Review",
    key: "Review",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/review",
    component: <Profile />,
  },
  {
    name: "Submit Selected",
    key: "submitSelected",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/submitSelected",
    component: <SubmitSelected />,
  },
  {
    name: "Input Pemohon",
    key: "inputPemohon",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/inputPemohon",
    component: <InputPemohon />,
  },
  {
    type: "collapse",
    name: "Approval",
    key: "Approval",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/approval",
    component: <Notifications />,
  },
  {
    type: "collapse",
    name: "Log Out",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
];

export default routes;

// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
import SignIn from "layouts/authentication/sign-in";
import SubmitSelected from "layouts/submitSelected/submitSelected";
import Upload from "layouts/upload/upload";
// import SlikSummary from "layouts/slikSummary/slikSummary";

// @mui icons
import Icon from "@mui/material/Icon";
import ReviewManager from "layouts/reviewManager/reviewManager";
import ApprovalPincab from "layouts/approvalPincab/approvalPincab";

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
    name: "Review Manager",
    key: "ReviewManager",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/reviewManager",
    component: <ReviewManager />,
  },
  {
    type: "collapse",
    name: "Approval Pincab",
    key: "ApprovalPincab",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/approvalPincab",
    component: <ApprovalPincab />,
  },
  {
    name: "Submit Selected",
    key: "submitSelected",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/submitSelected",
    component: <SubmitSelected />,
  },
  {
    name: "Upload",
    key: "upload",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/upload",
    component: <Upload />,
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

import { lazy } from "react";

const Dashboard = lazy(() => import("../modules/dashboard/Dashboard"));
const Beneficiary = lazy(() => import("../modules/beneficary"));

const Vendor = lazy(() => import("../modules/vendor"));
const AgencyList = lazy(() => import("../modules/agency/list"));
const AgencyDetails = lazy(() => import("../modules/agency/details"));
const AidList = lazy(() => import("../modules/aid/list"));
const AidDetails = lazy(() => import("../modules/aid/details"));
const AgencyProfile = lazy(() => import("../modules/agency/profile"));
const VendorDetails = lazy(() => import("../modules/vendor/detail/index"));
const BeneficiaryDetails = lazy(() =>
  import("../modules/beneficary/detail/index")
);

const Settings = lazy(() => import("../modules/settings"));

const Onboard = lazy(() => import("../modules/onboard"));

var AppRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "monitor",
    component: Dashboard,
    showInSidebar: true,
  },
  {
    path: "/profile",
    name: "My Profile",
    icon: "monitor",
    component: AgencyProfile,
    showInSidebar: false,
  },
  {
    path: "/agency",
    name: "Agency",
    icon: "umbrella",
    component: AgencyList,
    showInSidebar: false,
  },
  {
    path: "/agency-details/:id",
    name: "Agency",
    component: AgencyDetails,
  },
  {
    path: "/beneficiaries/:id/:aid/:project_id",
    name: "Beneficiary",
    component: BeneficiaryDetails,
  },
  {
    path: "/vendors/:id",
    name: "Vendor",
    component: VendorDetails,
  },
  {
    path: "/projects/:id",
    name: "Aid",
    component: AidDetails,
  },
  {
    path: "/projects",
    name: "Projects",
    icon: "layers",
    component: AidList,
    showInSidebar: true,
  },
  {
    path: "/beneficiaries",
    name: "Beneficiary",
    icon: "users",
    component: Beneficiary,
    showInSidebar: true,
  },
  {
    path: "/vendors",
    name: "Vendors",
    icon: "anchor",
    component: Vendor,
    showInSidebar: true,
  },
  {
    path: "/onboards",
    name: "Onboards",
    icon: "user",
    component: Onboard,
    showInSidebar: false,
  },
  {
    collapse: true,
    path: "/dashboard",
    name: "Admin",
    state: "dashboardpages",
    showInSidebar: false,

    icon: "lock",
    child: [
      {
        path: "/settings",
        name: "Settings",
        mini: "B",
        icon: "mdi mdi-adjust",
        component: Settings,
      },
      {
        path: "/users",
        name: "Users",
        mini: "B",
        icon: "mdi mdi-adjust",
        component: Dashboard,
      },
    ],
  },
  { path: "/", pathTo: "/dashboard", name: "Dashboard", redirect: true },
];
export default AppRoutes;

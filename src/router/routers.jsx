
import LayoutApplicants from "../layout/LayoutApplicants";
import LayoutJobRequests from "../layout/LayoutJobRequests";
import LayoutMain from "../layout/LayoutMain";
import Applicants from "../view/applicants/Applicants";
import DetailApplicant from "../view/applicants/children/DetailApplicant";
import { Dashboard } from "../view/dashboard/Dashboard";
import ErrorPage from "../view/ErrorPage/ErrorPage";
import CreateJobRequest from "../view/job-requests/children/CreateJobRequest";
import DetailJobRequest from "../view/job-requests/children/DetailJobRequest";
import JobRequests from "../view/job-requests/JobRequests";
import PrivateRoute from "./PrivateRoute";

const routers = [
  {
    path: "/",
    element: <LayoutMain />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        index: true,
        element: <Dashboard />,
      },
      {
        path: "applicants",
        element: <LayoutApplicants />,
        children: [
          {
            path: "",
            index: true,
            element: <Applicants />,
          },
          {
            path: ":id",
            element: <DetailApplicant />,
          },
        ]
      },
      {
        path: "job-requests",
        element: <LayoutJobRequests />,
        children: [
          {
            path: "",
            index: true,
            element: <JobRequests />,
          },
          {
            path: "create-job-request",
            element: <CreateJobRequest />,
          },
          {
            path: ":id",
            element: <DetailJobRequest />,
          }
        ]
      },
    ],
  },
];

export default routers
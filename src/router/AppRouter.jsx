// import React from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import MainLayout from "@/components/layout/MainLayout";
// import Dashboard from "@/pages/Dashboard";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainLayout />,
//     children: [
//       {
//         path: "/",
//         element: <Dashboard />,
//       },
//     ],
//   },
// ]);

// const AppRouter = ({ role, onRoleChange }) => {
//   return <RouterProvider router={router} />;
// };

// export default AppRouter;




import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import Dashboard from "@/pages/Dashboard";
import Transactions from "@/pages/Transactions";
import Insights from "@/pages/Insights";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />, 
      children: [
        {
          path: "/",
          element: (
            <Dashboard />
          ),
        },
        {
          path: "/transactions",
          element: (
            <Transactions />
          ),
        },
        {
          path: "/insights",
          element: (
            <Insights />
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@/contexts/theme-context";
import { element } from "prop-types";
import Layout from "@/routes/layout";
import DashboardPage from "@/routes/dashboard/page";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    index: "true",
                    element: <DashboardPage />,
                },
                {
                    path: "analytics",
                    element: <h1 className="title">Analytics</h1>,
                },
                {
                    path: "analytics",
                    element: <h1 className="title">Reports</h1>,
                },
                {
                    path: "analytics",
                    element: <h1 className="title">Customers</h1>,
                },
                {
                    path: "analytics",
                    element: <h1 className="title"> New Customers</h1>,
                },
                {
                    path: "analytics",
                    element: <h1 className="title"> Product</h1>,
                },
                {
                    path: "analytics",
                    element: <h1 className="title"> New Product</h1>,
                },
                {
                    path: "analytics",
                    element: <h1 className="title"> Inventory</h1>,
                },
                {
                    path: "analytics",
                    element: <h1 className="title"> Setting</h1>,
                },
            ],
        },
    ]);

    return (
        <ThemeProvider storageKey="theme">
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}
export default App;

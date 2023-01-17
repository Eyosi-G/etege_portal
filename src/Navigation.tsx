import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import SettingLayout from "./components/SettingLayout";
import SettingsSideBar from "./components/SettingsSideBar";
import AddEditProductPage from "./pages/AddEditProductPage";
import AddEditSupplierPage from "./pages/AddEditSupplierPage";
import CategoriesPage from "./pages/CategoriesPage";
import DashboardPage from "./pages/DashboardPage";
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/LoginPage";
import OrderDetailPage from "./pages/OrderDetailPage";
import OrdersPage from "./pages/OrdersPage";
import ProductsPage from "./pages/ProductsPage";
import ProfileSetting from "./pages/settings/ProfileSetting";
import ProfiltSetting from "./pages/settings/ProfiltSetting";
import SecuritySetting from "./pages/settings/SecuritySetting";
import SuppliersPage from "./pages/SuppliersPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <DashboardPage />
      },
      {
        path: "categories",
        element: <CategoriesPage />
      },
      // {
      //   path: "/suppliers",
      //   element: <SuppliersPage />
      // },
      // {
      //   path: "/suppliers/new",
      //   element: <AddEditSupplierPage />
      // },
      // {
      //   path: "/suppliers/:id/edit",
      //   element: <AddEditSupplierPage />
      // },
      {
        path: "/orders",
        element: <OrdersPage />
      },
      {
        path: "/orders/details/:id",
        element: <OrderDetailPage />
      },
      {
        path: "/products",
        element: <ProductsPage />
      },
      {
        path: "/products/new",
        element: <AddEditProductPage />
      },
      {
        path: "/products/:id/edit",
        element: <AddEditProductPage isEdit />
      },
      {
        path: "/settings",
        element: <SettingLayout />,
        children: [
          {
            index: true,
            element: <SecuritySetting />
          },
          {
            path: "profile",
            element: <ProfileSetting />,
          },
          {
            path: "profit",
            element: <ProfiltSetting />
          }
        ]
      }
    ]
  },
  {
    path: "/auth/login",
    element: <LoginPage />
  },

  {
    path: "*",
    element: <ErrorPage />
  }
]);
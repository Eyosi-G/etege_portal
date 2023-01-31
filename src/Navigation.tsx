import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import PrivateRoute from "./components/PrivateRoute";
import SettingLayout from "./components/SettingLayout";
import SettingsSideBar from "./components/SettingsSideBar";
import ActivateAccountPage from "./pages/ActivateAccountPage";
import AddEditProductPage from "./pages/AddEditProductPage";
import CategoriesPage from "./pages/CategoriesPage";
import DashboardPage from "./pages/DashboardPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import LoginPage from "./pages/LoginPage";
import NewPasswordPage from "./pages/NewPasswordPage";
import NotFoundPage from "./pages/NotFoundPage";
import OrderDetailPage from "./pages/OrderDetailPage";
import OrdersPage from "./pages/OrdersPage";
import ProductsPage from "./pages/ProductsPage";
import SalesPersonsPage from "./pages/SalesPersonsPage";
import ProfileSetting from "./pages/settings/ProfileSetting";
import SecuritySetting from "./pages/settings/SecuritySetting";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,


        element:
          <PrivateRoute roles={["ADMIN", "SELLS"]}>
            <DashboardPage />
          </PrivateRoute>
      },
      {
        path: "/categories",
        element: <PrivateRoute roles={["ADMIN"]}>
          <CategoriesPage />
        </PrivateRoute>
      },
      {
        path: "/orders",
        element: <PrivateRoute roles={["ADMIN", "SELLS"]}>
          <OrdersPage />
        </PrivateRoute>
      },
      {
        path: "/orders/details/:id",
        element: <PrivateRoute roles={["ADMIN", "SELLS"]}>
          <OrderDetailPage />
        </PrivateRoute>
      },
      {
        path: "/products",
        element: <PrivateRoute roles={["ADMIN"]}>
          <ProductsPage />
        </PrivateRoute>
      },
      {
        path: "/products/new",
        element: <PrivateRoute roles={["ADMIN"]}>
          <AddEditProductPage />
        </PrivateRoute>
      },
      {
        path: "/products/:id/edit",
        element: <PrivateRoute roles={["ADMIN"]}>
          <AddEditProductPage isEdit />
        </PrivateRoute>
      },
      {
        path: "/sales-person",
        element: <PrivateRoute roles={["ADMIN"]}>
          <SalesPersonsPage />
        </PrivateRoute>
      },
      {
        path: "/settings",
        element: <SettingLayout />,
        children: [
          {
            index: true,
            element: <PrivateRoute roles={["ADMIN", "SELLS"]}>
              <SecuritySetting />
            </PrivateRoute>
          },
          {
            path: "profile",
            element: <PrivateRoute roles={["ADMIN"]}>
              <ProfileSetting />
            </PrivateRoute>
          },
        ]
      }
    ]
  },
  {
    path: "/auth/login",
    element: <LoginPage />
  },

  {
    path: "/account/forgot-password",
    element: <ForgotPasswordPage />
  },
  {
    path: "/account/activate/:token",
    element: <ActivateAccountPage />
  },
  {
    path: "/account/new-password/:token",
    element: <NewPasswordPage />
  },
  {
    path: "*",
    element: <NotFoundPage />
  }
]);
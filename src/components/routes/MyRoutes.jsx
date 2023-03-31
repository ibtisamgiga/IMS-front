import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminPage from "../../pages/AdminPage";
import ComplaintsPage from "../../pages/ComplaintsPage";
import CreateAdminPage from "../../pages/CreateAdminPage";
import CreateOrganizationPage from "../../pages/create-organization-page/CreateOrganizationPage";
import LoginPage from "../../pages/LoginPage";
import OrganizationPage from "../../pages/OrganizationPage";
import SADashboardPage from "../../pages/saDashboard/SADashboardPage";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
import AdminDetailPage from "../../pages/admin-detail/AdminDetailPage";
import OrganizationDetailPage from "../../pages/organization-detail/OrganizationDetailPage";
import ComplaintDetailPage from "../../pages/complaints-detail/ComplaintDetailPage";
import CategoriesPage from "../../pages/admin-pages/category-page/CategoriesPage";
import ProtectedRoutes from "./ProtectedRoutes";
import AdminDashboardPage from "../../pages/admin-pages/admin-dashboard-page/AdminDashboardPage";
import InventoryPage from "../../pages/admin-pages/inventory-page/InventoryPage";
import InventoryDetailPage from "../../pages/admin-pages/inventory-detail-page/InventoryDetailPage";
import CreateItemPage from "../../pages/admin-pages/create-item-page/CreateItemPage";
import DepartmentPage from "../../pages/admin-pages/department-page/DepartmentPage";
import CreateDepartmentPage from "../../pages/admin-pages/create-department-page/CreateDepartment";
import DepartmentDetailPage from "../../pages/admin-pages/department-detail-page/DepartmentDetailPage";
import CreateCategoryPage from "../../pages/admin-pages/create-category-page/CreateCategoryPage";
import CategoryDetailPage from "../../pages/admin-pages/category-detail-page/CategoryDetailPage";
import EmployeePage from "../../pages/admin-pages/employee-page/EmployeePage";
import CreateEmployeePage from "../../pages/admin-pages/create-emplyee-page/CreateEmployeePage";
import EmployeeDetailPage from "../../pages/admin-pages/employee-detail-page/EmployeeDetailPage";
import VendorPage from "../../pages/admin-pages/vendor-page/VendorPage";
import CreateVendorPage from "../../pages/admin-pages/create-vendor-page/CreateVendorPage";
import VendorDetailPage from "../../pages/admin-pages/vendor-detail-page/VendorDetailPage";
import RequestPage from "../../pages/admin-pages/request-page/RequestPage";
import RequestDetailPage from "../../pages/admin-pages/request-detail-page/RequestDetailPage";
import ReturnPage from "../../pages/admin-pages/return-page/ReturnPage";
import ReturnDetailPage from "../../pages/admin-pages/return-detail-page/ReturnDetailPage";
function MyRoutes({ user }) {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoutes>
            {user.role == "superAdmin" ? (
              <SADashboardPage />
            ) : user.role == "admin" ? (
              <AdminDashboardPage />
            ) : null}
          </PrivateRoutes>
        }
      />
      <Route
        path="/admins"
        element={
          <PrivateRoutes>
            <AdminPage />
          </PrivateRoutes>
        }
      />
      <Route
        path="/login"
        element={
          <PublicRoutes>
            <LoginPage />
          </PublicRoutes>
        }
      />
      <Route
        path="/organizations"
        element={
          <PrivateRoutes>
            <OrganizationPage />
          </PrivateRoutes>
        }
      />
      <Route
        path="/complaints"
        element={
          <PrivateRoutes>
            <ComplaintsPage />
          </PrivateRoutes>
        }
      />

      <Route
        exact
        path="/create/admin"
        element={
          <PrivateRoutes>
            <CreateAdminPage />
          </PrivateRoutes>
        }
      />
      <Route
        path="/create/organization"
        element={
          <PrivateRoutes>
            <CreateOrganizationPage />
          </PrivateRoutes>
        }
      />

      <Route
        path="/admin/detail/:id"
        element={
          <PrivateRoutes>
            <AdminDetailPage />
          </PrivateRoutes>
        }
      />

      <Route
        path="/organization/detail/:id"
        element={
          <PrivateRoutes>
            <OrganizationDetailPage />
          </PrivateRoutes>
        }
      />

      <Route
        path="/complaints/detail/:id"
        element={
          <PrivateRoutes>
            <ComplaintDetailPage />
          </PrivateRoutes>
        }
      />

      <Route
        path="/categories"
        element={
          <ProtectedRoutes role={"admin"} user={user}>
            <PrivateRoutes>
              <CategoriesPage />
            </PrivateRoutes>
          </ProtectedRoutes>
        }
      />
      <Route
        path="/inventory"
        element={
          <ProtectedRoutes role={"admin"} user={user}>
            <PrivateRoutes>
              <InventoryPage />
            </PrivateRoutes>
          </ProtectedRoutes>
        }
      />
      <Route
        path="/inventory/detail/:id"
        element={
          <ProtectedRoutes role={"admin"} user={user}>
            <PrivateRoutes>
              <InventoryDetailPage />
            </PrivateRoutes>
          </ProtectedRoutes>
        }
      />
      <Route
        path="/inventory/create"
        element={
          <ProtectedRoutes role={"admin"} user={user}>
            <PrivateRoutes>
              <CreateItemPage />
            </PrivateRoutes>
          </ProtectedRoutes>
        }
      />

      <Route
        path="/departments"
        element={
          <ProtectedRoutes role={"admin"} user={user}>
            <PrivateRoutes>
              <DepartmentPage />
            </PrivateRoutes>
          </ProtectedRoutes>
        }
      />
      <Route
        path="/department/create"
        element={
          <ProtectedRoutes role={"admin"} user={user}>
            <PrivateRoutes>
              <CreateDepartmentPage />
            </PrivateRoutes>
          </ProtectedRoutes>
        }
      />

      <Route
        path="/department/detail/:id"
        element={
          <ProtectedRoutes role={"admin"} user={user}>
            <PrivateRoutes>
              <DepartmentDetailPage />
            </PrivateRoutes>
          </ProtectedRoutes>
        }
      />
      <Route
        path="/category/create"
        element={
          <ProtectedRoutes role={"admin"} user={user}>
            <PrivateRoutes>
              <CreateCategoryPage />
            </PrivateRoutes>
          </ProtectedRoutes>
        }
      />
      <Route
        path="/category/detail"
        element={
          <ProtectedRoutes role={"admin"} user={user}>
            <PrivateRoutes>
              <CategoryDetailPage />
            </PrivateRoutes>
          </ProtectedRoutes>
        }
      />

      <Route
        path="/employees"
        element={
          <ProtectedRoutes role={"admin"} user={user}>
            <PrivateRoutes>
              <EmployeePage />
            </PrivateRoutes>
          </ProtectedRoutes>
        }
      />
      <Route
        path="/employee/create"
        element={
          <ProtectedRoutes role={"admin"} user={user}>
            <PrivateRoutes>
              <CreateEmployeePage />
            </PrivateRoutes>
          </ProtectedRoutes>
        }
      />
      <Route
        path="/employee/detail/:id"
        element={
          <ProtectedRoutes role={"admin"} user={user}>
            <PrivateRoutes>
              <EmployeeDetailPage />
            </PrivateRoutes>
          </ProtectedRoutes>
        }
      />
      <Route
        path="/vendors"
        element={
          <ProtectedRoutes role={"admin"} user={user}>
            <PrivateRoutes>
              <VendorPage />
            </PrivateRoutes>
          </ProtectedRoutes>
        }
      />
      <Route
        path="/vendor/create"
        element={
          <ProtectedRoutes role={"admin"} user={user}>
            <PrivateRoutes>
              <CreateVendorPage />
            </PrivateRoutes>
          </ProtectedRoutes>
        }
      />
      <Route
        path="/vendor/detail/:id"
        element={
          <ProtectedRoutes role={"admin"} user={user}>
            <PrivateRoutes>
              <VendorDetailPage />
            </PrivateRoutes>
          </ProtectedRoutes>
        }
      />

      <Route
        path="/requests"
        element={
          <ProtectedRoutes role={"admin"} user={user}>
            <PrivateRoutes>
              <RequestPage />
            </PrivateRoutes>
          </ProtectedRoutes>
        }
      />

      <Route
        path="/request/detail/:id"
        element={
          <ProtectedRoutes role={"admin"} user={user}>
            <PrivateRoutes>
              <RequestDetailPage />
            </PrivateRoutes>
          </ProtectedRoutes>
        }
      />

      <Route
        path="/returns"
        element={
          <ProtectedRoutes role={"admin"} user={user}>
            <PrivateRoutes>
              <ReturnPage />
            </PrivateRoutes>
          </ProtectedRoutes>
        }
      />

      <Route
        path="/return/detail/:id"
        element={
          <ProtectedRoutes role={"admin"} user={user}>
            <PrivateRoutes>
              <ReturnDetailPage />
            </PrivateRoutes>
          </ProtectedRoutes>
        }
      />
    </Routes>
  );
}

export default MyRoutes;

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import PrivateRoute from "./routes/PrivateRoute";

import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";

import UserlistPage from "./pages/userDomain/UserlistPage";
import NewUserPage from "./pages/userDomain/NewUserPage";
import UserDetailsPage from "./pages/userDomain/UserDetailsPage";
import EditUserPage from "./pages/userDomain/EditUserPage";

import EditProjectPage from "./pages/projectDomain/EditProjectPage";
import NewProjectPage from "./pages/projectDomain/NewProjectPage";
import ProjectDetailsPage from "./pages/projectDomain/ProjectDetailsPage";
import ProjectListPage from "./pages/projectDomain/ProjectListPage";
import AssignedProjectListPage from "./pages/projectDomain/AssignedProjectListPage";
import AssignedProjectDetailsPage from "./pages/projectDomain/AssignedProjectDetailsPage";
import AssignedProjectEditPage from "./pages/projectDomain/AssignedProjectEditPage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>

        <PrivateRoute exact path="/dashboard">
          <DashboardPage />
        </PrivateRoute>

        <PrivateRoute path="/dashboard/users">
          <UserlistPage />
        </PrivateRoute>

        <PrivateRoute path="/dashboard/users/new">
          <NewUserPage />
        </PrivateRoute>

        <PrivateRoute path="/dashboard/users/:id">
          <UserDetailsPage />
        </PrivateRoute>

        <PrivateRoute path="/dashboard/users/:id/edit">
          <EditUserPage />
        </PrivateRoute>

        <PrivateRoute exact path="/dashboard/projects">
          <ProjectListPage />
        </PrivateRoute>

        <PrivateRoute path="/dashboard/projects/new">
          <NewProjectPage />
        </PrivateRoute>

        <PrivateRoute path="/dashboard/projects/:id">
          <ProjectDetailsPage />
        </PrivateRoute>

        <PrivateRoute path="/dashboard/projects/:id/edit">
          <EditProjectPage />
        </PrivateRoute>

        <PrivateRoute exact path="/dashboard/assigned">
          <AssignedProjectListPage />
        </PrivateRoute>

        <PrivateRoute exact path="/dashboard/assigned/:id/">
          <AssignedProjectDetailsPage />
        </PrivateRoute>

        <PrivateRoute exact path="/dashboard/assigned/:id/edit">
          <AssignedProjectEditPage />
        </PrivateRoute>

        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default App;

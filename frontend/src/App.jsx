import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import PrivateRoute from "./routes/PrivateRoute";

import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";

import {
  UserlistPage,
  UserDetailsPage,
  NewUserPage,
  EditUserPage,
} from "./pages/UserDomainPages";

import {
  ProjectListPage,
  ProjectDetailsPage,
  NewProjectPage,
  EditProjectPage,
  AssignedProjectListPage,
  AssignedProjectDetailsPage,
  AssignedProjectEditPage,
} from "./pages/ProjectDomainPages";

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

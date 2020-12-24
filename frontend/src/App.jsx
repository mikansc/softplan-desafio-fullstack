import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Route path="/" exact component={LoginPage} />
      <Route path="/dashboard/users" component={DashboardPage} />
    </Router>
  );
};

export default App;

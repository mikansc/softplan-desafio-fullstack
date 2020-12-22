import React from "react";
import DefaultScreen from "./components/DefaultScreen";
import LoginScreen from "./pages/LoginPage";

const App = () => {
  return (
    <DefaultScreen>
      <LoginScreen />
    </DefaultScreen>
  );
};

export default App;

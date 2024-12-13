import React from "react";
import ReduxProvider from "./components/ReduxProvider";
import Dashboard from "./components/Dashboard";

const App: React.FC = () => {
  return (
    <ReduxProvider>
      <Dashboard />
    </ReduxProvider>
  );
};

export default App;

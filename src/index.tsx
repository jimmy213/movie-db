import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./Routes";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function App() {
  return (
    <>
      <AppRoutes />
    </>
  );
}

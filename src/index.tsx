import React from "react";
import ReactDOM from "react-dom/client";
import { Helmet } from "react-helmet";
import { Provider } from "react-redux";
import AppRoutes from "./Routes";
import store from "./store";

import "./styles/application.scss";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <ProviderApp />
  </React.StrictMode>
);

export default function ProviderApp() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

function App() {
  return (
    <>
      <Helmet>
        <title>Movies DB</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <AppRoutes />
    </>
  );
}

import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./routes/AppRouter.jsx";

// Redux
import { Provider } from "react-redux";
import store from "./app/store.js";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>
);

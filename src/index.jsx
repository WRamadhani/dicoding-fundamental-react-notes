import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// import App from "./App";
// import NotesAppWrapper from "./pages/NotesApp";
import Layout from "./pages/Layout";

import "./styles/reset.css";
import "./styles/app.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
);

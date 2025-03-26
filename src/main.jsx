import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import Create from "./components/Create.jsx";
import Home from "./components/Home.jsx";
import { ToastContainer } from "react-toastify";
import Edit from "./components/Edit.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="" element={<Home />} />
      <Route path="create" element={<Create />} />
      <Route path="edit/:id" element={<Edit />} />
    </Route>
  )
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <App />
    <ToastContainer position="top-right" autoClose={3000} />
  </StrictMode>
);

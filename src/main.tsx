import React from "react";
import ReactDOM from "react-dom/client";
import AddArticle from "./AddArticle.tsx";
import ListView from "./ListView.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/add_article",
    element: <AddArticle />,
  },
  {
    path: "/",
    element: <ListView></ListView>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="p-8">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
);

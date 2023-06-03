import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/scss/normalize.scss";
import "./assets/scss/style.scss";
import { RouterProvider } from "react-router-dom";

import { router } from "./router";

// новый синтаксис

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />

    {/* <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage todos={todos} />} />
        <Route path="/list/:id" element={<ItemDescription todos={todos} />} />
        <Route path="/todo" element={<ToDoListPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter> */}
  </React.StrictMode>
);

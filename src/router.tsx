import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layouts/layout";
import { NotFound } from "./pages/404";
import { ViewListPage } from "./pages/ViewListPage";
import { ToDoListPage } from "./pages/ToDoListPage";
import { ViewListItem } from "./pages/ViewListItem";
import { ToDo } from "./models/todo-item";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        {
          path: "/",
          element: <ToDoListPage />,
        },

        {
          path: "/list",
          element: <ViewListPage />,
        },
        {
          path: "/list/:id",
          element: <ViewListItem />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ],
  // учитываем поддомены (для git pages)
  { basename: "/app/" }
);

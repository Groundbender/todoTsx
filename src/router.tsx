import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layouts/layout";
import { NotFound } from "./pages/404";
import { ViewListPage } from "./pages/ViewListPage";
import { ToDoListPage } from "./pages/ToDoListPage";
import { ViewListItem } from "./pages/ViewListItem";
import { ToDo } from "./models/todo-item";

// const todos: ToDo[] = [
//   {
//     id: 0,
//     text: "Clean the kitchen",
//     isDone: false,
//   },
//   {
//     id: 1,
//     text: "Clean the bathroom",
//     isDone: true,
//   },
//   {
//     id: 2,
//     text: "Buy a beer",
//     isDone: false,
//   },
//   {
//     id: 3,
//     text: "Learn React",
//     isDone: true,
//   },
// ];

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
  ]
  // учитываем поддомены (для git pages)
  // { basename: "/app/" }
);

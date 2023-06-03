import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layouts/layout";
import { NotFound } from "./pages/404";
import { HomePage } from "./pages/ViewList";
import { ToDoListPage } from "./pages/ToDoListPage";
import { ItemDescription } from "./pages/ItemDescription";
import { ToDo } from "./models/todo-item";

const todos: ToDo[] = [
  {
    id: 0,
    text: "Clean the kitchen",
    isDone: false,
  },
  {
    id: 1,
    text: "Clean the bathroom",
    isDone: true,
  },
  {
    id: 2,
    text: "Buy a beer",
    isDone: false,
  },
  {
    id: 3,
    text: "Learn React",
    isDone: true,
  },
];

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        {
          path: "/",
          element: <HomePage todos={todos} />,
        },
        {
          path: "/todo",
          element: <ToDoListPage />,
        },
        {
          path: "/list/",
          children: [
            {
              path: ":id",
              element: <ItemDescription todos={todos} />,
            },
          ],
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

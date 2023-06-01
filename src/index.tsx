import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/scss/normalize.scss";
import "./assets/scss/style.scss";
import { ToDoListPage } from "./pages/ToDoListPage";
import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Header } from "./components/Header/Header";
import { ToDo } from "./models/todo-item";
import { NotFound } from "./pages/404";
import { ItemDescription } from "./pages/ItemDescription";
import { Layout } from "./layouts/layout";

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

// новый синтаксис
const router = createBrowserRouter(
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
          path: "/list/:id",
          element: <ItemDescription todos={todos} />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ],
  // учитываем поддомены
  { basename: "/app/" }
);

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

import { Form } from "../components/Form/Form";
import { ToDoList } from "../components/ToDoList/ToDoList";
import { ToDo } from "../models/todo-item";
import { useState } from "react";

import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ToDoListPage = () => {
  const [todos, setTodos] = useState<ToDo[]>([]);

  // const todos: ToDo[] = [];

  const notifyStyles: object = {
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "colored",
  };

  const notifyUpdate = (text: string) =>
    toast.info(`Case "${text}" is successfully updated!`, notifyStyles);
  const notifyDelete = (text: string) =>
    toast.error(`Case "${text}" is successfully deleted!`, notifyStyles);
  const notifyAdd = (text: string) =>
    toast.success(`Case "${text}" is successfully added!`, notifyStyles);

  const createNewToDo = (text: string) => {
    const newToDo: ToDo = {
      id: todos.length,
      text: text,
      isDone: false,
    };
    setTodos([...todos, newToDo]);
  };

  const updateToDo = (toDoItem: ToDo) => {
    const newToDos = todos.map((item) => {
      if (item.id === toDoItem.id) {
        item.isDone = !toDoItem.isDone;
      }
      return item;
    });

    setTodos(newToDos);
  };

  const deleteToDo = (toDoItem: ToDo) => {
    const newToDos = todos.filter((item) => item.id !== toDoItem.id);

    setTodos(newToDos);
  };

  return (
    <>
      <Form createNewToDo={createNewToDo} notifyAdd={notifyAdd} />
      <ToDoList
        todos={todos}
        updateToDo={updateToDo}
        deleteToDo={deleteToDo}
        notifyUpdate={notifyUpdate}
        notifyDelete={notifyDelete}
      />
      {/* <button onClick={notify}>Notify</button> */}
      <ToastContainer transition={Slide} />
    </>
  );
};

import { Form } from "../components/Form/Form";
import { ToDoList } from "../components/ToDoList/ToDoList";
import { ToDo } from "../models/todo-item";
import { useState } from "react";

import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { createAction, deleteAction, updateAction } from "../feature/todoList";

export const ToDoListPage = () => {
  // const [todos, setTodos] = useState<ToDo[]>([]);
  const todoList = useSelector((state: RootState) => state.todoList.todos);
  const dispatch = useDispatch();

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
    dispatch(createAction(text));
  };

  const updateToDo = (toDoItem: ToDo) => {
    dispatch(updateAction(toDoItem));
  };

  const deleteToDo = (toDoItem: ToDo) => {
    dispatch(deleteAction(toDoItem));
  };

  return (
    <>
      <Form createNewToDo={createNewToDo} notifyAdd={notifyAdd} />
      <ToDoList
        todos={todoList}
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

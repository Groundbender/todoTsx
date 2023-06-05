import { ToDoListItem } from "./ToDoListItem/ToDoListItem";
import { ToDo } from "../../models/todo-item";
import {
  ToDoContainer,
  ToDoListFailed,
  ToDoListCompleted,
} from "./ToDoList.styled";

export const ToDoList = (props: {
  todos: ToDo[];
  updateToDo: Function;
  deleteToDo: Function;
  notifyUpdate: Function;
  notifyDelete: Function;
}) => {
  const checkedList = () => {
    return props.todos
      .filter((item) => !item.isDone)
      .map((item) => {
        return (
          <ToDoListItem
            toDoItem={item}
            key={item.id}
            updateToDo={props.updateToDo}
            deleteToDo={props.deleteToDo}
            notifyUpdate={props.notifyUpdate}
            notifyDelete={props.notifyDelete}
          />
        );
      });
  };
  const unCheckedList = () => {
    return props.todos
      .filter((item) => item.isDone)
      .map((item) => {
        return (
          <ToDoListItem
            toDoItem={item}
            key={item.id}
            updateToDo={props.updateToDo}
            deleteToDo={props.deleteToDo}
            notifyUpdate={props.notifyUpdate}
            notifyDelete={props.notifyDelete}
          />
        );
      });
  };

  return (
    <ToDoContainer>
      <ToDoListFailed>{checkedList()}</ToDoListFailed>
      <ToDoListCompleted>{unCheckedList()}</ToDoListCompleted>
    </ToDoContainer>
  );
};

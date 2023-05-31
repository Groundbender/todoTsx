import { ToDoListItem } from "./ToDoListItem/ToDoListItem";
import "./ToDoList.scss";
import { ToDo } from "../../models/todo-item";

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
      .map((item, index) => {
        return (
          <ToDoListItem
            toDoItem={item}
            key={index}
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
      .map((item, index) => {
        return (
          <ToDoListItem
            toDoItem={item}
            key={index}
            updateToDo={props.updateToDo}
            deleteToDo={props.deleteToDo}
            notifyUpdate={props.notifyUpdate}
            notifyDelete={props.notifyDelete}
          />
        );
      });
  };

  return (
    <div className="todo-container">
      <ul className="todo-list failed">
        {/* <ToDoListItem toDoItem={todos} /> */}
        {checkedList()}
      </ul>
      <ul className="todo-list completed">{unCheckedList()}</ul>
    </div>
  );
};

import { ToDo } from "../../../models/todo-item";
import "./ToDoListItem.scss";

export const ToDoListItem = (props: {
  toDoItem: ToDo;
  updateToDo: Function;
  deleteToDo: Function;
  notifyUpdate: Function;
  notifyDelete: Function;
}) => {
  return (
    <li className="todo-list-item__wrapper">
      <span>{props.toDoItem.text}</span>
      <div className="todo-list-item__buttons">
        <button
          className="btn-trash"
          onClick={() => {
            props.deleteToDo(props.toDoItem);
            props.notifyDelete(props.toDoItem.text);
          }}
        ></button>
        <button
          className={props.toDoItem.isDone ? "btn-check" : "btn-uncheck"}
          onClick={() => {
            props.updateToDo(props.toDoItem);
            props.notifyUpdate(props.toDoItem.text);
          }}
        ></button>
      </div>
    </li>
  );
};

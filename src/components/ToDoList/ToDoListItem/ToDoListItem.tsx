import { ToDo } from "../../../models/todo-item";

import checkIcon from "../../../assets/images/check.png";
import uncheckIcon from "../../../assets/images/uncheck.png";
import trachIcon from "../../../assets/images/trash.png";
import {
  ToDoItemControls,
  ToDoItem,
  ToDoItemControl,
  ToDoItemText,
} from "./ToDoListItem.styled";

export const ToDoListItem = (props: {
  toDoItem: ToDo;
  updateToDo: Function;
  deleteToDo: Function;
  notifyUpdate: Function;
  notifyDelete: Function;
}) => {
  return (
    <ToDoItem>
      <ToDoItemText>{props.toDoItem.text}</ToDoItemText>
      <ToDoItemControls>
        <ToDoItemControl
          icon={trachIcon}
          onClick={() => {
            props.deleteToDo(props.toDoItem);
            props.notifyDelete(props.toDoItem.text);
          }}
        ></ToDoItemControl>
        <ToDoItemControl
          icon={props.toDoItem.isDone ? checkIcon : uncheckIcon}
          onClick={() => {
            props.updateToDo(props.toDoItem);
            props.notifyUpdate(props.toDoItem.text);
          }}
        ></ToDoItemControl>
      </ToDoItemControls>
    </ToDoItem>
  );
};

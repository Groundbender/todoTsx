import { Link } from "react-router-dom";
import { ToDo } from "../../models/todo-item";
import { TodoLink } from "./ListItem.styled";
export const ListItem = ({ todo }: { todo: ToDo }) => {
  return (
    <TodoLink $colorflag={todo.isDone} to={`/list/${todo.id}`}>
      {todo.text}
    </TodoLink>
  );
};

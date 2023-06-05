import { useSelector } from "react-redux";
import { ListItem } from "../components/ListItem/ListItem";
import { ToDo } from "../models/todo-item";
import { RootState } from "../store";

// interface ComponentProps {
//   todos: ToDo[];
// }

export const ViewListPage = () => {
  const todoList = useSelector((state: RootState) => state.todoList.todos);
  return (
    <div className="container">
      {todoList.map((todo: ToDo) => {
        return <ListItem todo={todo} key={todo.id} />;
      })}
    </div>
  );
};

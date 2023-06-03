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
      {todoList.map((todo: ToDo, index: number) => {
        return <ListItem todo={todo} key={index} />;
      })}
    </div>
  );
};

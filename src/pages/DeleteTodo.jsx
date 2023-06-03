import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
import { deleteFetchTodos } from "../store/todosReducer";
import { useSelector, useDispatch } from "react-redux";

const DeleteTodo = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(deleteFetchTodos());
  }, [dispatch]);

  const deleteApi = () => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((resp) => alert("успешно удалено " + "статус: " + resp.status))
      .then(navigate("/posts"));
  };

  return (
    <div>
      <div>{todos.title}</div>
      <span>Вы хотите?</span>
      <button onClick={deleteApi}> Да</button>
      <button onClick={() => navigate("/todos")}>Нет</button>
    </div>
  );
};
export default DeleteTodo;

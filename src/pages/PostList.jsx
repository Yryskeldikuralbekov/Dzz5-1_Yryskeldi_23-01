import axios from "axios";
import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { singleSetTodos } from "../store/todosReducer";
import { useSelector, useDispatch } from "react-redux";

const PostList = () => {
  //   const [post, setPost] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((resp) => dispatch(singleSetTodos(resp.data)));
  }, [id]);

  //   const deletePost = () => {
  //     axios
  //       .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
  //       .then((resp) => console.log(resp));
  //   };

  return (
    <div>
      {/* <ul>
        <li key={id}>{todos.title}</li>
      </ul> */}
      <p>{todos.title}</p>
      <button onClick={() => navigate(-1)}>Назад</button>
      {/* <ul>
        <Link key={t.id} to={`/${t.id}`}>
          {todos.title}
        </Link>
      </ul> */}
      <Link to={`/delete/${id}`}>
        <button>Удалить</button>
      </Link>
    </div>
  );
};
export default PostList;

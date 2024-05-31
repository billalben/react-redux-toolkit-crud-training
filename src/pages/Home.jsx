import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "../features/user/userSlice";

const Home = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  return (
    <div className="container">
      <h2 className="text-center my-4">Simple CRUD App</h2>
      <Link to="/create-user" className="btn btn-primary my-3">
        Create +
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, userId) => (
            <tr key={user.id}>
              <td>{userId + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Link
                  to={`/update-user/${user.id}`}
                  className="btn btn-sm btn-primary ms-1"
                >
                  Edit
                </Link>
                <button
                  className="btn btn-sm btn-danger ms-1"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;

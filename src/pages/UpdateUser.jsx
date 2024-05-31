import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../features/user/userSlice";

const UpdateUser = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) =>
    state.users.find((user) => user.id === userId)
  );

  const [name, setName] = React.useState(user.name);
  const [email, setEmail] = React.useState(user.email);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser({ id: userId, name, email }));
    navigate("/");
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-info">
      <div className="w-50 border bg-info-subtle p-5 rounded">
        <h2>Update User</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;

import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim()) {
      alert("Please fill in all fields");
      return;
    }

    dispatch(addUser({ id: nanoid(), name, email }));
    navigate("/");

    setName("");
    setEmail("");
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-info">
      <div className="w-50 border bg-info-subtle p-5 rounded">
        <h2>Add New User</h2>
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

export default CreateUser;

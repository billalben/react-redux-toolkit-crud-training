import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: nanoid(),
    name: "John",
    email: "John@contact.me",
  },
  {
    id: nanoid(),
    name: "Jane",
    email: "Jane@contact.me",
  },
];

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    deleteUser: (state, action) => {
      return state.filter((user) => user.id !== action.payload);
    },
    updateUser: (state, action) => {
      const { id, name, email } = action.payload;
      const existingUser = state.find((user) => user.id === id);
      if (existingUser) {
        existingUser.name = name;
        existingUser.email = email;
      }
    },
  },
});

export const { addUser, deleteUser ,updateUser } = userSlice.actions;
export default userSlice.reducer;

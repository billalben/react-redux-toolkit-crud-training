import {
  configureStore,
  createListenerMiddleware,
  isAnyOf,
} from "@reduxjs/toolkit";
import userReducer, {
  addUser,
  deleteUser,
  updateUser,
} from "../features/user/userSlice";

const localStorageMiddleware = createListenerMiddleware();

localStorageMiddleware.startListening({
  matcher: isAnyOf(addUser, updateUser, deleteUser),
  effect: (action, listenerApi) => {
    const users = listenerApi.getState().users;
    localStorage.setItem("users", JSON.stringify(users));
  },
});

const store = configureStore({
  reducer: {
    users: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(localStorageMiddleware.middleware),
});

export default store;

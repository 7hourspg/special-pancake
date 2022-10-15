import { configureStore, createSlice } from "@reduxjs/toolkit";
import { UsersData } from "../FakeData";

const counterSlice = createSlice({
  name: "users",
  initialState: { value: UsersData },
  reducers: {
    addUser: (state, action) => {
      state.value.push(action.payload);
    },
    deleteUser: (state, action) => {
      state.value = state.value.filter((user) => user.id !== action.payload.id);
    },
    updateName: (state, action) => {
      state.value.map((user) => {
        if (user.id === action.payload.id) {
          user.name = action.payload.name;
        }
      });
    },
  },
});
export const { addUser, deleteUser, updateName } = counterSlice.actions;
const store = configureStore({
  reducer: { users: counterSlice.reducer },
});
export default store;

import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/profile/profileSlice';
// import counterReducer from '../features/myLists/myListsSlice';
// import counterReducer from '../features/todoList/todoListSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

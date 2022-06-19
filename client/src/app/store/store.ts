import { configureStore } from '@reduxjs/toolkit';
import dressesReducer from '../../features/dresses.slice';
import userReducer from '../../features/user.slice';

export default configureStore({
  reducer: {
    dress: dressesReducer,
    user: userReducer,
  },
});

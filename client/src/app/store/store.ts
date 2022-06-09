import { configureStore } from '@reduxjs/toolkit';
import dressesReducer from '../../features/dresses.slice';
export default configureStore({
  reducer: {
    dress: dressesReducer,
  },
});

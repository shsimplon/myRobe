import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { dress, dressesStore } from '../types/dress';

const initialState: dressesStore = {
  dress: [],
};
export const dressesSlice = createSlice({
  name: 'dress',
  initialState,
  reducers: {
    getDresses: (state: dressesStore, action: PayloadAction<dress[]>) => {
      const dress = action.payload;
      state.dress = dress;
    },
    addDress: (state, { payload }) => {
      state.dress.push(payload);
    },
  },
});

export const { getDresses, addDress } = dressesSlice.actions;
export default dressesSlice.reducer;

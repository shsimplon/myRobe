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
    editDress: (state, { payload }) => {
      state.dress.map(dress => {
        if (dress.id === payload.id) {
          dress.name = payload.name;
          dress.price = payload.price;

          dress.size = payload.size;
        }
      });
    },

    deleteDress: (state, { payload }) => {
      state.dress = state.dress.filter(dress => dress.id !== payload.id);
    },
  },
});

export const { getDresses, addDress, editDress, deleteDress } =
  dressesSlice.actions;
export default dressesSlice.reducer;

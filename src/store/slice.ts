import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type WidgetState = {
  message: string;
};

const initialState = {
  message: 'My new widget',
} as WidgetState;

const slice = createSlice({
  name: 'widget',
  initialState,
  reducers: {
    setMessage(state, action: PayloadAction<string>) {
      state.message = action.payload;
    },
  },
});

export const {
  setMessage,
} = slice.actions;
export default slice.reducer;

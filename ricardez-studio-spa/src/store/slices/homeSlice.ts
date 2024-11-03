import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { put, takeLatest } from 'redux-saga/effects';

interface HomeState {
  message: string;
}

const initialState: HomeState = {
  message: 'Welcome to the art!',
};

// Define the Redux slice
const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setMessage(state, action: PayloadAction<string>) {
      state.message = action.payload;
    },
    fetchMessage() {}, // Saga will listen to this action
  },
});

export const { setMessage, fetchMessage } = homeSlice.actions;
export default homeSlice.reducer;

function* fetchMessageSaga() {
  yield put(setMessage('Hello from Redux-Saga!'));
}

export function* homeSaga() {
  yield takeLatest(fetchMessage.type, fetchMessageSaga);
}

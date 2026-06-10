import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './counterSlice';
import { APIsRequest } from './APIsRequestService';

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    [APIsRequest.reducerPath]: APIsRequest.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(APIsRequest.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
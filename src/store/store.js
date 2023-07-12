import { configureStore } from '@reduxjs/toolkit'
import githubUserSlice from './githubUserSlice'
export const store = configureStore({
  reducer: {
    githubUserSlice
  },
});

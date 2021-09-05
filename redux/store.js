import { configureStore } from '@reduxjs/toolkit'
import { pynsMiddleware, pynsReducer, pynsReducerPath } from './pynsAPIs'
import userReducer from './user'

const store = configureStore({
  reducer: {
    user: userReducer,
    [pynsReducerPath]: pynsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(pynsMiddleware),
  devTools: process.env.ENV_ARG === 'development',
})

export default store

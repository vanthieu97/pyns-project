import { configureStore } from '@reduxjs/toolkit'
import { pynsMiddleware, pynsReducer, pynsReducerPath } from './pynsAPIs'

const store = configureStore({
  reducer: {
    [pynsReducerPath]: pynsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(pynsMiddleware),
  devTools: process.env.ENV_ARG === 'development',
})

export default store

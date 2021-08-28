import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: () => {},
  devTools: process.env.ENV_ARG === 'development',
})

export default store

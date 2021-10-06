const { createSlice } = require('@reduxjs/toolkit')

const userSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    setToken: (state, { payload }) => {
      state.token = payload
    },
    setUser: (_state, { payload }) => payload,
    resetUser: () => ({}),
  },
})

const { actions, reducer } = userSlice

export const { setToken, setUser, resetUser } = actions

export default reducer

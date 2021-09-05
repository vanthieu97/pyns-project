import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { LOCAL_STORAGE_TOKEN } from 'shared/constants'

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.API_URL,
  prepareHeaders: (headers) => {
    const token = localStorage.getItem(LOCAL_STORAGE_TOKEN)
    token && headers.set('authorization', `JWT ${token}`)
    return headers
  },
})

export const transformResponse = (response) => {
  const { code, data, msg } = response
  if (code === 0) {
    return data
  }
  return Promise.reject(msg)
}

const loginQuery = (params) => ({
  method: 'post',
  url: `/user/login/`,
  body: params,
})

const registerQuery = (params) => ({
  method: 'post',
  url: `/user/register/`,
  body: params,
})

export const pynsAPIs = createApi({
  baseQuery,
  reducerPath: 'pynsAPIs',
  endpoints: (build) => ({
    login: build.mutation({
      query: loginQuery,
      transformResponse,
    }),
    register: build.mutation({
      query: registerQuery,
      transformResponse,
    }),
  }),
})

export const {
  endpoints: pynsEndpoints,
  reducerPath: pynsReducerPath,
  reducer: pynsReducer,
  middleware: pynsMiddleware,
  usePrefetch: usePrefetchPyns,
} = pynsAPIs

export const { useLoginMutation, useRegisterMutation } = pynsAPIs

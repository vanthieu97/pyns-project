import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { LOCAL_STORAGE_TOKEN } from 'shared/constants'
import { setUser } from './user'

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

const getUserQuery = () => ({
  method: 'post',
  url: `/user/get_info/`,
})

const updateUserQuery = (params) => ({
  method: 'post',
  url: `/user/update/`,
  body: params,
})

const getMyPacksQuery = (params) => ({
  method: 'post',
  url: `/user/get_my_packs/`,
  body: params,
})

const getListPacksQuery = () => ({
  method: 'post',
  url: `/user/get_list_packs/`,
  body: { offset: 0, limit: 100 },
})

const purchasePackQuery = (params) => ({
  method: 'post',
  url: `/user/purchase_pack/`,
  body: params,
})

const generateReportQuery = (params) => ({
  method: 'post',
  url: `/user/generate_report/`,
  body: params,
})

const getReportsQuery = (params) => ({
  method: 'post',
  url: `/user/get_reports/`,
  body: params,
})

export const pynsAPIs = createApi({
  baseQuery,
  reducerPath: 'pynsAPIs',
  tagTypes: ['GetMyPacks', 'User'],
  endpoints: (build) => ({
    login: build.mutation({
      query: loginQuery,
      transformResponse,
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled
        dispatch(setUser(data))
        localStorage.setItem(LOCAL_STORAGE_TOKEN, data.token)
      },
    }),
    register: build.mutation({
      query: registerQuery,
      transformResponse,
    }),
    getUser: build.query({
      query: getUserQuery,
      transformResponse,
      providesTags: ['User'],
    }),
    updateUser: build.mutation({
      query: updateUserQuery,
      transformResponse,
      invalidatesTags: (result) => result && ['User'],
    }),
    getMyPacks: build.query({
      query: getMyPacksQuery,
      transformResponse,
      providesTags: [{ type: 'GetMyPacks', id: 'LIST' }],
    }),
    getListPacks: build.query({
      query: getListPacksQuery,
      transformResponse,
    }),
    purchasePack: build.mutation({
      query: purchasePackQuery,
      transformResponse,
      invalidatesTags: (result) => result && ['GetMyPacks'],
    }),
    generateReport: build.mutation({
      query: generateReportQuery,
      transformResponse,
      invalidatesTags: (result) => result && ['GetMyPacks'],
    }),
    getReports: build.query({
      query: getReportsQuery,
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

export const {
  useLoginMutation,
  useRegisterMutation,
  useGetUserQuery,
  useUpdateUserMutation,
  useGetMyPacksQuery,
  useGetListPacksQuery,
  usePurchasePackMutation,
  useGenerateReportMutation,
  useGetReportsQuery,
} = pynsAPIs

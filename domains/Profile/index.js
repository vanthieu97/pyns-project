import { Button, Form, message, Typography } from 'antd'
import UserForm from 'components/UserForm'
import moment from 'moment'
import Head from 'next/head'
import Router from 'next/router'
import React, { useEffect } from 'react'
import { useGetUserQuery, useUpdateUserMutation } from 'redux/pynsAPIs'
import { BE_DATE_FORMAT } from 'shared/constants'
import { getErrorMessage } from 'shared/utility'

const { Title } = Typography
const Profile = () => {
  const [form] = Form.useForm()
  const { data: getUserData, error: getUserError, isFetching: getUserLoading } = useGetUserQuery()
  const [updateUser, { isSuccess: updateUserSuccess, error: updateUserError, isLoading: updateUserLoading }] =
    useUpdateUserMutation()

  useEffect(() => {
    if (getUserData) {
      const { date_of_birth, ...rest } = getUserData
      form.setFieldsValue({ ...rest, date_of_birth: moment(date_of_birth) })
    }
  }, [getUserData])

  useEffect(() => {
    if (getUserError) {
      message.error(getErrorMessage(getUserError))
    }
  }, [getUserError])

  useEffect(() => {
    if (updateUserSuccess) {
      message.success('Cập nhật thành công')
      Router.reload(window.location.pathname)
    }
  }, [updateUserSuccess])

  useEffect(() => {
    if (updateUserError) {
      message.error(getErrorMessage(updateUserError))
    }
  }, [updateUserError])

  const onClickSubmit = () => {
    form.validateFields().then((values) => {
      const { date_of_birth, ...rest } = values
      updateUser({ ...rest, date_of_birth: date_of_birth.format(BE_DATE_FORMAT) })
    })
  }

  return (
    <div className="form-wrapper">
      <Head>
        <title>Thông tin cá nhân</title>
      </Head>
      <Title level={2} className="text-center">
        Thông tin cá nhân
      </Title>
      <UserForm form={form} />
      <div className="text-center">
        <Button type="primary" onClick={onClickSubmit} className="mt-8" size="large" loading={updateUserLoading}>
          Cập nhật
        </Button>
        <br />
      </div>
    </div>
  )
}

export default Profile

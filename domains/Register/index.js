import { Button, Divider, Form, message, Typography } from 'antd'
import UserForm from 'components/UserForm'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useRegisterMutation } from 'redux/pynsAPIs'
import { BE_DATE_FORMAT } from 'shared/constants'
import { getErrorMessage } from 'shared/utility'

const { Title } = Typography

const Register = () => {
  const [form] = Form.useForm()
  const router = useRouter()
  const token = useSelector((state) => state.user.token)

  const [register, { isSuccess: registerSuccess, error: registerError, isFetching: registerLoading }] =
    useRegisterMutation()

  useEffect(() => {
    if (router.isReady && token) {
      message.success('Đăng nhập thành công')
      // router.push(router.query.next ?? '/')
      router.push('/')
    }
  }, [router.isReady, token])

  useEffect(() => {
    if (registerSuccess) {
      message.success('Đăng ký thành công')
      const nextQuery = router.query.next
      // if (nextQuery) {
      //   return router.push(`/login?next=${encodeURIComponent(nextQuery)}`)
      // }
      return router.push('/login')
    }
  }, [registerSuccess])

  useEffect(() => {
    if (registerError) {
      message.error(getErrorMessage(registerError))
    }
  }, [registerError])

  const onClickSubmit = () => {
    form.validateFields().then((values) => {
      const { confirm_password, date_of_birth, ...rest } = values
      register({
        ...rest,
        date_of_birth: date_of_birth.format(BE_DATE_FORMAT),
      })
    })
  }

  return (
    <div className="form-wrapper">
      <Head>
        <title>Đăng ký</title>
      </Head>
      <Title level={2} className="text-center">
        Đăng ký
      </Title>
      <UserForm
        form={form}
        // initialValues={{
        //   name: 'Nguyễn Văn A',
        //   user_type: 'personal',
        //   email: 'nguyenvana@gmail.com',
        //   phone: '0928033208',
        //   gender: 'male',
        //   date_of_birth: moment('12-02-1997', BE_DATE_FORMAT),
        //   city: 'Thành phố Hồ Chí Minh',
        //   district: 'Huyện Bình Chánh',
        //   address: 'Somewhere',
        //   password: '123',
        //   confirm_password: '123',
        // }}
      />
      <div className="text-center">
        <Button type="primary" onClick={onClickSubmit} className="mt-8" size="large">
          Đăng ký
        </Button>
        <br />
        <Divider className="my-16" />
        <span>
          Đã có tài khoản?
          <Link href={router.query.next ? `/login?next=${encodeURIComponent(router.query.next)}` : '/login'}>
            <a> Đăng nhập ngay</a>
          </Link>
        </span>
      </div>
    </div>
  )
}

export default Register

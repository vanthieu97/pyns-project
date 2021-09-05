import React from 'react'
import { Form, Input, Radio, Select, DatePicker } from 'antd'
import PropTypes from 'prop-types'
import { PROVINCES } from 'shared/provinces'
import { DATE_FORMAT, PHONE_REGEX } from 'shared/constants'

const { Item } = Form

const UserForm = ({ form, initialValues = {} }) => {
  return (
    <Form
      form={form}
      initialValues={initialValues}
      labelCol={{ span: 0, sm: { span: 7 } }}
      labelAlign="left"
      className="mt-12"
    >
      <Item name="user_type" required rules={[{ required: true, message: 'Vui lòng chọn loại' }]} label="Loại">
        <Radio.Group
          options={[
            { value: 'personal', label: 'Cá nhân' },
            { value: 'company', label: 'Công ty' },
          ]}
        />
      </Item>
      <Item name="name" required rules={[{ required: true, message: 'Vui lòng nhập tên' }]} label="Tên">
        <Input placeholder="Nhập tên" />
      </Item>
      <Item
        name="email"
        label="Email"
        required
        rules={[
          { required: true, message: 'Vui lòng nhập email' },
          { type: 'email', message: 'Vui lòng nhập email hợp lệ' },
        ]}
      >
        <Input placeholder="Nhập email" />
      </Item>
      <Item
        name="phone"
        required
        rules={[
          { required: true, message: 'Vui lòng nhập số điện thoại' },
          {
            validator(_, value) {
              if (value && !PHONE_REGEX.test(value)) {
                return Promise.reject('Số điện thoại không hợp lệ')
              }
              return Promise.resolve()
            },
          },
        ]}
        label="Số điện thoại"
      >
        <Input placeholder="Nhập số điện thoại" />
      </Item>
      <Item name="gender" label="Giới tính" required rules={[{ required: true, message: 'Vui lòng chọn giới tính' }]}>
        <Select
          options={[
            { value: 'male', label: 'Nam' },
            { value: 'female', label: 'Nữ' },
            { value: 'other', label: 'Khác' },
          ]}
          placeholder="Chọn giới tính"
        />
      </Item>
      <Item
        name="date_of_birth"
        label="Ngày sinh"
        required
        rules={[{ required: true, message: 'Vui lòng chọn ngày sinh' }]}
      >
        <DatePicker className="w-100" format={DATE_FORMAT} placeholder="Chọn ngày sinh" />
      </Item>
      <Item
        name="city"
        label="Tỉnh/Thành phố"
        required
        rules={[{ required: true, message: 'Vui lòng chọn tỉnh/thành phố' }]}
      >
        <Select options={PROVINCES} placeholder="Chọn tỉnh/thành phố" />
      </Item>
      <Item
        name="district"
        label="Quận/Huyện"
        required
        rules={[{ required: true, message: 'Vui lòng chọn quận/huyện' }]}
      >
        <Select options={PROVINCES} placeholder="Chọn quận/huyện" />
      </Item>
      <Item name="address" label="Địa chỉ">
        <Input placeholder="Nhập địa chỉ" />
      </Item>
      <Item name="password" required rules={[{ required: true, message: 'Vui lòng nhập mật khẩu' }]} label="Mật khẩu">
        <Input.Password placeholder="Nhập mật khẩu" />
      </Item>
      <Item
        name="confirm_password"
        required
        rules={[
          { required: true, message: 'Vui lòng nhập mật khẩu' },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve()
              }
              return Promise.reject('Mật khẩu không khớp')
            },
          }),
        ]}
        label="Nhập lại mật khẩu"
      >
        <Input.Password placeholder="Nhập lại mật khẩu" />
      </Item>
    </Form>
  )
}

UserForm.propTypes = {
  form: PropTypes.object.isRequired,
  initialValues: PropTypes.object,
}

export default React.memo(UserForm)

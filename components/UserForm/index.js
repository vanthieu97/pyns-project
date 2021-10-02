import { DatePicker, Form, Input, Radio, Select } from 'antd'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { DATE_FORMAT, PHONE_REGEX } from 'shared/constants'
import { PROVINCES } from 'shared/provinces'

const { Item } = Form

const provinceNameMapping = Object.keys(PROVINCES)

const UserForm = ({ form, initialValues = {} }) => {
  const [selectedProvince, setSelectedProvince] = useState('')
  const [districts, setDistricts] = useState([])

  useEffect(() => {
    if (initialValues.city) {
      setSelectedProvince(initialValues.city)
    }
  }, [initialValues])

  useEffect(() => {
    setDistricts(PROVINCES[selectedProvince]?.sort() ?? [])
  }, [selectedProvince])

  const onChangeCity = (value) => {
    setSelectedProvince(value)
    form.setFieldsValue({ district: null })
  }

  return (
    <Form form={form} initialValues={initialValues} labelCol={{ span: 7 }} labelAlign="left" className="mt-12">
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
        <Select showSearch autoComplete="new-password" onChange={onChangeCity} placeholder="Chọn tỉnh/thành phố">
          {provinceNameMapping.map((province) => (
            <Select.Option key={province} value={province}>
              {province}
            </Select.Option>
          ))}
        </Select>
      </Item>
      <Item
        name="district"
        label="Quận/Huyện"
        required
        rules={[{ required: true, message: 'Vui lòng chọn quận/huyện' }]}
      >
        <Select showSearch autoComplete="new-password" placeholder="Chọn quận/huyện">
          {districts.map((province) => (
            <Select.Option key={province} value={province}>
              {province}
            </Select.Option>
          ))}
        </Select>
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

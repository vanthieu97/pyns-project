import React from 'react'
import PropTypes from 'prop-types'

const PhoneNumberInput = ({ phoneNumber, setPhoneNumber }) => {
  return (
    <div className="flex w-full bg-white items-center rounded mb-6 pr-10">
      <div className="flex -mr-px justify-center p-4">
        <span className="flex items-center bg-white text-xl px-3 text-gray-400">
          <FontAwesomeIcon icon={faMobile} />
        </span>
      </div>
      <input
        type="text"
        className="w-px flex-1 px-3 text-xl outline-none"
        placeholder="Số điện thoại"
        value={phoneNumber}
        onChange={onChangePhoneNumber}
      />
    </div>
  )
}

export default React.memo(PhoneNumberInput)

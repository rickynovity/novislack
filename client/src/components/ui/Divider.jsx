import React from 'react'

const Divider = ({ text }) => {
  return (
    <span className="relative flex justify-center my-10 mx-10">
      <div
        className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"
      ></div>
      <span className="relative z-10 bg-white px-6">{text}</span>
    </span>
  )
}

export default Divider

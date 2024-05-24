import React from "react";

const LoginInput = ({ value, name, type, id, placeholder, onChange }) => {
  return (
    // <div className='mb-5'>
    <input
      className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-lg ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      value={value}
      name={name}
      type={type}
      id={id}
      placeholder={placeholder}
      onChange={onChange}
    />
    // </div>
  );
};

export default LoginInput;

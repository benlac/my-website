import React from 'react';

const Field = ({
  placeholder,
  value,
  name,
  handleChange,
}) => (
  <input
    className="contact__field"
    type="text"
    placeholder={placeholder}
    value={value}
    name={name}
    onChange={(e) => {
      handleChange(e.target);
    }}
  />
);

export default Field;

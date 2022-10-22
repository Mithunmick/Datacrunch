import React from 'react';

const FormInput = (props: {
  [x: string]: any;
  placeholder: string | undefined;
}) => {
  const { label, onChange, id, ...inputProps } = props;
  return (
    <>
      <div>
        <label>{label}</label>
        <input {...inputProps} onChange={onChange} />
      </div>
    </>
  );
};

export default FormInput;

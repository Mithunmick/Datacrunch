import { useState } from 'react';

const useInputState = (initialValues: any) => {
  const [state, setstate] = useState(initialValues);

  const onChangeHandler = (e: { target: { name: any; value: any } }) =>
    setstate({
      ...state,
      [e.target.name]: e.target.value,
    });

  const reset = (field: string | number) => {
    if (field) {
      setstate({
        ...state,
        [field]: initialValues[field],
      });
    } else {
      setstate({
        ...initialValues,
      });
    }
  };

  return [state, onChangeHandler, reset];
};

export default useInputState;

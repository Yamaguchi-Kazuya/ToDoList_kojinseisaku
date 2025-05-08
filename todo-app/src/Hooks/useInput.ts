import { useState, ChangeEvent } from 'react';

export const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const reset = () => {
    setValue('');
  };

  return {
    value,
    onChange,
    reset,
  };
};
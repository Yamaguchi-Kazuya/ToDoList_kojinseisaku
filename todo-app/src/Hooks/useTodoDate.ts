import { useState, useEffect } from 'react';

export const useTodoDate = (date: Date) => {
  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    setFormattedDate(date.toLocaleDateString(undefined, options));
  }, [date]);

  return { formattedDate };
};
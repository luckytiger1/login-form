import { useState } from 'react';

const useFields = (initialState: any) => {
  const [fields, setFields] = useState(initialState);

  return [
    fields,
    (event: any) => {
      setFields({
        ...fields,
        [event.target.id]: event.target.value,
      });
    },
  ];
};

export default useFields;

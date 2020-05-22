import React, { useState, useEffect } from 'react';

const InputComponent = () => {
  const [state, setState] = useState('');
  const multiply = (a: any) => {
    return a * a;
  };
  useEffect(() => {
    const a = 2;
    if (multiply(a) === 4) {
      setState('It is 2');
    }
    return () => {};
  }, []);
  return <div>{state}</div>;
};

export default InputComponent;

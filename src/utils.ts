export const validateEmail = (email: string) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return !re.test(String(email).toLowerCase());
};

export const validateConfirmPassword = (
  password: string,
  confirmPassword: string,
) => {
  return confirmPassword.length > 0 && password !== confirmPassword;
};

export const validatePassword = (password: string) => {
  return password.length < 6 && password.length > 0;
};

export const checkEmptyFields = (
  firstName?: string,
  lastName?: string,
  email?: string,
  password?: string,
) => {
  return (
    firstName?.trim().length &&
    lastName?.trim().length &&
    email?.trim().length &&
    password?.trim().length
  );
};

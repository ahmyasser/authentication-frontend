import { useState } from 'react';

const usePasswordValidation = () => {
  const [password, setPassword] = useState('');
  const [isPasswordValid, setPasswordValid] = useState(true);

  const validatePassword = (password: string): boolean => {
    const minLengthRegex = /.{8,}/;
    const letterRegex = /[A-Za-z]/;
    const numberRegex = /[0-9]/;
    const specialCharRegex = /[^A-Za-z0-9]/;

    return (
      minLengthRegex.test(password) &&
      letterRegex.test(password) &&
      numberRegex.test(password) &&
      specialCharRegex.test(password)
    );
  };

  const handlePasswordChange = (password: string) => {
    setPassword(password);
    setPasswordValid(validatePassword(password));
  };

  return {
    password,
    isPasswordValid,
    setPassword,
    handlePasswordChange,
  };
};

export default usePasswordValidation;

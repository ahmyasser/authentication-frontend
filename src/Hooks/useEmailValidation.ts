import { useState } from 'react';

const useEmailValidation = () => {
  const [email, setEmail] = useState('');
  const [isEmailValid, setEmailValid] = useState(true);

  const validateEmail = (email: string): boolean => {
    const regexPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexPattern.test(email);
  };

  const handleEmailChange = (email: string) => {
    setEmail(email);
    setEmailValid(validateEmail(email));
  };

  return {
    email,
    isEmailValid,
    setEmail,
    handleEmailChange,
  };
};

export default useEmailValidation;
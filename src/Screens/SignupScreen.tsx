// src/components/SignupScreen.tsx

import React, { useState, ChangeEvent, FormEvent } from "react";
import { ENDPOINTS, SCREENS } from "../Constants";

import useEmailValidation from "../Hooks/useEmailValidation";
import usePasswordValidation from "../Hooks/usePasswordValidation";
import { useScreen } from "../Contexts/ScreenContext";
import sendRequest from "../utils/api";
import { toast } from "react-toastify";

interface SignupFormData {
  name: string;
  email: string;
  password: string;
}

const SignupScreen: React.FC = () => {
  const { changeScreen, changeUser } = useScreen();

  const { email, isEmailValid, handleEmailChange } = useEmailValidation();

  const { password, isPasswordValid, handlePasswordChange } =
    usePasswordValidation();

  const [formData, setFormData] = useState<SignupFormData>({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!isEmailValid || !isPasswordValid) {
      // Do not submit as validation failed
      return;
    }
    const updatedFormData = {
      ...formData,
      email: email,
      password: password,
    };
    console.log("Form submitted:", updatedFormData);
    try {
      const data = await sendRequest(ENDPOINTS.SIGNUP, "POST", updatedFormData);
      console.log("Form submitted and response received:", data);
      changeUser(data.name);
      toast.success("You have signed up successfully!");
      changeScreen(SCREENS.HOME);
    } catch (error) {
      if ((error as any).message) toast.error((error as any).message);
      toast.error("There was a problem signing up. Please try again.");
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  return (
    <div className="signup-screen">
      <h2>SignUp</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => handleEmailChange(e.target.value)}
            className={!isEmailValid ? "invalid" : ""}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => handlePasswordChange(e.target.value)}
            className={!isPasswordValid ? "invalid" : ""}
            required
          />
        </div>
        <div className="error">
          {!isPasswordValid && (
            <div className="error">
              Password must be at least 8 characters long, contain a letter, a
              number, and a special character.
            </div>
          )}
        </div>
        <button type="submit">Sign Up</button>

        <div className="small">
          Already a user{" "}
          <span className="link" onClick={() => changeScreen(SCREENS.LOGIN)}>
            Sign-in
          </span>
        </div>
      </form>
    </div>
  );
};

export default SignupScreen;

// src/components/SignupScreen.tsx

import React, { useState, ChangeEvent, FormEvent } from "react";
import { toast } from "react-toastify";
import { ENDPOINTS, SCREENS } from "../Constants";
import { useScreen } from "../Contexts/ScreenContext";
import sendRequest from "../utils/api";

interface LoginFormData {
  email: string;
  password: string;
}

const LoginScreen: React.FC = () => {
  const { changeScreen, changeUser } = useScreen();

  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    console.log("Form submitted:", formData);
    try {
      const data = await sendRequest(ENDPOINTS.LOGIN, "POST", formData);
      console.log("Form submitted and response received:", data);
      toast.success('You have signed in successfully!');
      changeUser(data.name)
      changeScreen(SCREENS.HOME); 
    } catch (error) {
      toast.error('Wrong email or password.');
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  return (
    <div className="signup-screen">
      <h2>SignIn</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="error">
          {!true && <div className="error">Wrong Email or Password</div>}
        </div>
        <button type="submit">Sign in</button>

        <div className="small">
          New user{" "}
          <span className="link" onClick={() => changeScreen(SCREENS.SIGNUP)}>
            Sign-up
          </span>
        </div>
      </form>
    </div>
  );
};

export default LoginScreen;
